import { getNotionData } from "@/app/(contents)/product/actions"
import NotionViewer from "@/app/(contents)/product/notion-render"

export default async function Product() {
    const data = await getNotionData("13805fa11ff880069d37f6b25e0fd66d")
    console.log(data)
    return <NotionViewer data={data} />
}
