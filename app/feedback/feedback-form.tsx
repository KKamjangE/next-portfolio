"use client";

import {
    CommentsType,
    createComments,
    deleteComment,
} from "@/app/feedback/actions";
import { formatToTimeAge } from "@/lib/utils";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "@/app/feedback/schema";
import { z } from "zod";
import { useEffect } from "react";

interface FeedbackFormProps {
    comments: CommentsType;
    userId?: string;
}

export default function FeedbackForm({ comments, userId }: FeedbackFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        resetField,
        formState: { errors },
    } = useForm<z.infer<typeof commentSchema>>({
        resolver: zodResolver(commentSchema),
    });

    useEffect(() => {
        setValue("userId", userId);
    }, [userId, setValue]);

    const onSubmit = handleSubmit(async (data) => {
        resetField("payload");
        if (!data.userId) {
            return setError("userId", { message: "로그인을 해주세요." });
        }

        const formData = new FormData();

        formData.append("payload", data.payload);
        formData.append("userId", data.userId);

        const errors = await createComments(formData);

        if (errors) {
            for (const [field, message] of Object.entries(errors.fieldErrors)) {
                setError(field as keyof z.infer<typeof commentSchema>, {
                    message: message.join(", "),
                });
            }
        }
    });

    const onValid = async () => {
        await onSubmit();
    };

    const onDeleteComment = (commentId: string) => {
        const ok = window.confirm("정말 삭제하시겠습니까?");

        if (!ok) return;

        deleteComment(commentId);
    };

    return (
        <div className="flex flex-col gap-5 p-5">
            {userId ? (
                <>
                    <form action={onValid} className="flex gap-3">
                        <Input
                            autoComplete="off"
                            placeholder="잘 보고 갑니다~"
                            {...register("payload")}
                        />
                        <Button>피드백 달기</Button>
                    </form>
                    {errors.payload && (
                        <span className="text-sm text-red-500">
                            {errors.payload?.message ?? ""}
                        </span>
                    )}
                </>
            ) : (
                <p className="font-semibold">
                    로그인 하시면 포트폴리오에 대한 피드백을 남기실 수 있어요!
                </p>
            )}
            {comments.map((comment) => (
                <div
                    key={comment.id}
                    className="flex w-full flex-col justify-end gap-3 rounded-md border border-neutral-400 p-5 shadow-xl"
                >
                    <div className="flex items-center gap-3">
                        {comment.user.image ? (
                            <Image
                                src={comment.user.image}
                                alt={comment.user.name!}
                                width={50}
                                height={50}
                                className="size-10 rounded-full"
                            />
                        ) : (
                            <CircleUserRound />
                        )}
                        <span className="text-lg font-semibold">
                            {comment.user.name}
                        </span>
                        <span className="ml-auto text-sm">
                            {formatToTimeAge(comment.createdAt.toString())}
                        </span>
                    </div>
                    <p className="break-words text-lg font-semibold">
                        {comment.payload}
                    </p>
                    {userId === comment.userId && (
                        <Button
                            onClick={() => onDeleteComment(comment.id)}
                            className="self-end bg-red-600 hover:bg-red-500"
                        >
                            삭제
                        </Button>
                    )}
                </div>
            ))}
        </div>
    );
}
