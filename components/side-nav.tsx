import NavItem from "@/components/nav-item"

export default function SideNav() {
    return (
        <aside className="top-[89px] mt-10 hidden h-[500px] w-full p-3 md:sticky md:block">
            <nav>
                <ul className="flex flex-col gap-2">
                    <NavItem href={"/"}>Introduction</NavItem>
                    <NavItem href={"/projects"}>Projects</NavItem>
                </ul>
            </nav>
        </aside>
    )
}
