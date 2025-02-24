"use server"

import { notion, notionDatabase } from "@/lib/notion"

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
