import { z } from "zod"

export const projectSchema = z.object({
    title: z.string().trim().min(1, { message: "제목을 입력해주세요." }),
    date: z.object({
        from: z.date(),
        to: z.date().optional(),
    }),
    descriptions: z.array(
        z.object({
            description: z
                .string()
                .trim()
                .min(1, { message: "설명을 입력해주세요." }),
        }),
    ),
    urls: z.object({
        github: z.string().optional(),
        blog: z.string().optional(),
        site: z.string().optional(),
    }),
    skills: z.array(
        z.object({
            name: z.string().trim().min(1, { message: "기술을 입력해주세요." }),
        }),
    ),
})
