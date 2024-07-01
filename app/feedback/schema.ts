import { z } from "zod"

export const commentSchema = z.object({
    payload: z.string().trim().min(1, { message: "피드백을 작성해주세요." }),
    userId: z.string().optional(),
})
