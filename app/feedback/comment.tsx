"use client"

import { deleteComment } from "@/app/feedback/actions"
import { Button } from "@/components/ui/button"
import { formatToTimeAge } from "@/lib/utils"
import { CircleUserRoundIcon } from "lucide-react"
import Image from "next/image"

interface CommentProps {
    comment: {
        user: {
            name: string | null
            image: string | null
        }
        id: string
        payload: string
        userId: string
        createdAt: Date
        updatedAt: Date
    }
    userId?: string
}

export default function Comment({ comment, userId }: CommentProps) {
    function onDeleteComment() {
        const ok = window.confirm("정말 삭제하시겠습니까?")
        if (!ok) return
        deleteComment(comment.id)
    }

    return (
        <div
            key={comment.id}
            className="flex w-full flex-col justify-end gap-3 rounded-md border border-neutral-400 p-5 shadow-xl"
        >
            <div className="flex items-center justify-between *:flex *:items-center *:justify-between *:gap-3">
                <div>
                    {comment.user.image ? (
                        <Image
                            src={comment.user.image}
                            alt={comment.user.name!}
                            width={50}
                            height={50}
                            className="size-10 rounded-full"
                        />
                    ) : (
                        <CircleUserRoundIcon />
                    )}
                    <span className="text-lg font-semibold">
                        {comment.user.name}
                    </span>
                </div>
                <div>
                    <span className="text-sm">
                        {formatToTimeAge(comment.createdAt.toString())}
                    </span>
                    {userId === comment.userId && (
                        <form action={onDeleteComment}>
                            <Button variant={"destructive"}>삭제</Button>
                        </form>
                    )}
                </div>
            </div>
            <p className="break-words text-lg font-semibold">
                {comment.payload}
            </p>
        </div>
    )
}
