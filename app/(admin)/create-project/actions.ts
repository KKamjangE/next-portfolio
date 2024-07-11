"use server"

import { projectSchema } from "@/app/(admin)/create-project/schema"
import db from "@/lib/db"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function createProject(formData: FormData) {
    const data = {
        title: formData.get("title"),
        date: {
            from: new Date(formData.get("from") as string),
            to: formData.get("to")
                ? new Date(formData.get("to") as string)
                : undefined,
        },
        descriptions: JSON.parse(formData.get("descriptions") as string),
        urls: JSON.parse(formData.get("urls") as string),
        skills: JSON.parse(formData.get("skills") as string),
    }

    const result = projectSchema.safeParse(data)

    if (!result.success) {
        return result.error.flatten()
    } else {
        const { date, descriptions, skills, title, urls } = result.data
        await db.projects.create({
            data: {
                title,
                startDate: date.from,
                endDate: date.to ?? null,
                descriptions: {
                    create: descriptions.map((description) => ({
                        description: description.description,
                    })),
                },
                urls: {
                    create: {
                        github: urls.github,
                        blog: urls.blog,
                        site: urls.site,
                    },
                },
                skills: {
                    create: skills.map((skill) => ({
                        name: skill.name,
                    })),
                },
            },
            select: {
                id: true,
            },
        })

        revalidateTag("projects")
        redirect("/")
    }
}
