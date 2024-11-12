"use server"

import db from "@/lib/db"
import { notion, notionDatabase } from "@/lib/notion"

export async function getProjects() {
    const projects = await db.projects.findMany({
        include: {
            urls: { select: { blog: true, github: true, site: true } },
        },
    })

    return projects
}

export async function getNotionData(pageId: string) {
    return await notion.getPage(pageId)
}

export async function getNotionDB() {
    return await notionDatabase.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        sorts: [
            {
                property: "생성 일시",
                direction: "ascending",
            },
        ],
    })
}
