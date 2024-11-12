import { Client } from "@notionhq/client"
import { NotionAPI } from "notion-client"

export const notion = new NotionAPI()

export const notionDatabase = new Client({
    auth: process.env.NOTION_SECRET,
})
