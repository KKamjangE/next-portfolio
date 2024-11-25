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

export async function getNotionPage(pageId: string) {
    return await notion.getPage(pageId)
}

export async function getNotionDB() {
    return await notionDatabase.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        sorts: [
            {
                direction: "ascending",
                timestamp: "created_time",
            },
        ],
    })
}

export async function getData(): Promise<NotionDatabaseResponse> {
    const response = await fetch(
        `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
        {
            method: "POST",
            headers: {
                "Notion-Version": "2022-06-28",
                Authorization: `Bearer ${process.env.NOTION_SECRET}`,
            },
        },
    )

    if (!response.ok) {
        throw new Error("Fetch Failed")
    }

    const data: NotionDatabaseResponse = await response.json()
    return data
}

export interface NotionDatabaseResponse {
    results: [
        {
            id: string
            properties: {
                Date: {
                    id: string
                    type: string
                    created_time: string
                }
                title: {
                    title: [
                        {
                            plain_text: string
                        },
                    ]
                }
            }
        },
    ]
}
