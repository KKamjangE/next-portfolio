"use server"

import { commentSchema } from "@/app/feedback/schema"
import db from "@/lib/db"
import { Prisma } from "@prisma/client"
import { unstable_cache as nextCache, revalidateTag } from "next/cache"

async function getComments() {
    const comments = await db.comments.findMany({
        include: {
            user: {
                select: {
                    image: true,
                    name: true,
                },
            },
        },
        orderBy: { createdAt: "desc" },
    })

    return comments
}

export async function getCachedComments() {
    const cachedOperation = nextCache(getComments, ["comments"], {
        tags: ["comments"],
    })

    return cachedOperation()
}

export type CommentsType = Prisma.PromiseReturnType<typeof getComments>

export async function createComments(formData: FormData) {
    const data = {
        payload: formData.get("payload"),
        userId: formData.get("userId"),
    }

    const result = commentSchema.safeParse(data)

    if (!result.success) {
        return result.error.flatten()
    } else {
        await db.comments.create({
            data: {
                payload: result.data.payload,
                user: {
                    connect: {
                        id: result.data.userId,
                    },
                },
            },
        })
    }

    revalidateTag("comments")
}

export async function deleteComment(commentId: string) {
    await db.comments.delete({
        where: {
            id: commentId,
        },
    })

    revalidateTag("comments")
}
