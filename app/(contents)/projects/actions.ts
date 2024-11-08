"use server"

import db from "@/lib/db"

export async function getProjects() {
    const projects = await db.projects.findMany({
        include: {
            urls: { select: { blog: true, github: true, site: true } },
        },
    })

    return projects
}
