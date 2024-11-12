import "react-notion-x/src/styles.css"

import "katex/dist/katex.min.css"
import "prismjs/themes/prism-tomorrow.css"

import { getNotionDB, getNotionData } from "@/app/(contents)/product/actions"
import NotionViewer from "@/app/(contents)/product/notion-render"

export default async function ProductDetail({
    params,
}: {
    params: { pageId: string }
}) {
    console.log(params.pageId)
    const db = await getNotionDB()
    // console.log(db.results)
    const data = await getNotionData(db.results[0].id)

    return <NotionViewer data={data} />
}
