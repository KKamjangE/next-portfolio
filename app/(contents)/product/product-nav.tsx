import NavItem from "@/components/layouts/nav-item"

export default function ProductNav() {
    return (
        <aside className="top-20 hidden h-[500px] w-full p-3 md:sticky md:block">
            <nav>
                <ul className="flex flex-col gap-2">
                    <NavItem href={"/"}>Introduction</NavItem>
                    <NavItem href={"/projects"}>Projects</NavItem>
                </ul>
            </nav>
        </aside>
    )
}
