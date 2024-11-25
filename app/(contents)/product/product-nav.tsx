import { PartialDatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints"

import { getData, getNotionDB } from "@/app/(contents)/product/actions"
import NavItem from "@/components/layouts/nav-item"

export default async function ProductNav() {
    const notionData = await getNotionDB()
    // TODO: notionData resonse의 properties type 문제
    console.log(notionData.results)
    const data = await getData()
    const navList = data.results.map((item) => ({
        id: item.id,
        title: item.properties.title.title[0].plain_text,
    }))

    return (
        <aside className="top-20 hidden h-[500px] w-full p-3 md:sticky md:block">
            <nav>
                <ul className="flex flex-col gap-2">
                    {navList.map((nav) => (
                        <NavItem key={nav.id} href={`/product/${nav.id}`}>
                            {nav.title}
                        </NavItem>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
