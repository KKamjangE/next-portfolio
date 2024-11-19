import { getNotionPage } from "@/app/(contents)/product/actions"
import NotionViewer from "@/app/(contents)/product/notion-viewer"

export default async function Product() {
    const page = await getNotionPage("13805fa11ff880b8addddc32b66c9a8c")

    return <NotionViewer data={page} />
}
