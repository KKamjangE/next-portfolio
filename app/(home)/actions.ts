"use server"

import db from "@/lib/db"

export async function getProjects() {
    const projects = await db.projects.findMany({
        include: {
            skills: { select: { name: true } },
            urls: { select: { blog: true, github: true, site: true } },
            descriptions: { select: { description: true } },
        },
    })

    return projects
}
