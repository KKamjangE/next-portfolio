import { getNotionPage } from "@/app/(contents)/product/actions"
import NotionViewer from "@/app/(contents)/product/notion-viewer"

export default async function ProductDetail({
    params,
}: {
    params: { pageId: string }
}) {
    const data = await getNotionPage(params.pageId)

    return <NotionViewer data={data} />
}
