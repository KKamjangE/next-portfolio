import { isFullPage } from "@notionhq/client"

import { getNotionDB } from "@/app/(contents)/product/actions"
import NavItem from "@/components/layouts/nav-item"

export default async function ProductNav() {
    const notionData = await getNotionDB()

    const navList = notionData.results.map((item) => {
        if (!isFullPage(item)) return

        if (item.properties.title.type === "title") {
            return {
                id: item.id,
                title: item.properties.title.title[0].plain_text,
            }
        }
    })

    return (
        <aside className="top-20 hidden h-[500px] w-full p-3 md:sticky md:block">
            <nav>
                <ul className="flex flex-col gap-2">
                    {navList.map((nav) => (
                        <NavItem key={nav?.id} href={`/product/${nav?.id}`}>
                            {nav?.title}
                        </NavItem>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
