import { getNotionPage } from "@/app/(contents)/product/actions"
import NotionViewer from "@/app/(contents)/product/notion-viewer"
import ProductNav from "@/app/(contents)/product/product-nav"

export default async function Product() {
    const page = await getNotionPage("13805fa11ff880b8addddc32b66c9a8c")

    return (
        <div className="flex gap-8">
            <NotionViewer page={page} />
            <div className="w-[220px]">오른쪽 콘텐츠</div>
        </div>
    )
}
