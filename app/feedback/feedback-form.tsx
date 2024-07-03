"use client"

import { createComments } from "@/app/feedback/actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { commentSchema } from "@/app/feedback/schema"
import { z } from "zod"
import { useEffect } from "react"

interface FeedbackFormProps {
    userId?: string
}

export default function FeedbackForm({ userId }: FeedbackFormProps) {
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        resetField,
        formState: { errors },
    } = useForm<z.infer<typeof commentSchema>>({
        resolver: zodResolver(commentSchema),
    })

    useEffect(() => {
        setValue("userId", userId)
    }, [userId, setValue])

    const onSubmit = handleSubmit(async (data) => {
        resetField("payload")
        if (!data.userId) {
            return setError("userId", { message: "로그인을 해주세요." })
        }

        const formData = new FormData()

        formData.append("payload", data.payload)
        formData.append("userId", data.userId)

        const errors = await createComments(formData)

        if (errors) {
            for (const [field, message] of Object.entries(errors.fieldErrors)) {
                setError(field as keyof z.infer<typeof commentSchema>, {
                    message: message.join(", "),
                })
            }
        }
    })

    const onValid = async () => {
        await onSubmit()
    }

    return (
        <>
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
        </>
    )
}
