import { getNotionPage } from "@/app/(contents)/product/actions"
import NotionViewer from "@/app/(contents)/product/notion-viewer"

export default async function Product() {
    const page = await getNotionPage("13805fa11ff880b8addddc32b66c9a8c")

    return (
        <div className="flex gap-8">
            <NotionViewer page={page} />
            <div className="hidden w-[220px] xl:block"></div>
        </div>
    )
}
