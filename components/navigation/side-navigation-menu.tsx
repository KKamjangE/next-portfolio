import NavigationMenuItem from "@/components/navigation/navigation-menu-item"

export default function SideNavigationMenu() {
    return (
        <aside className="top-[89px] mt-10 hidden h-[500px] w-full p-3 md:sticky md:block">
            <nav>
                <ul className="flex flex-col gap-2">
                    <NavigationMenuItem href={"/"}>
                        Introduction
                    </NavigationMenuItem>
                    <NavigationMenuItem href={"/sign"}>
                        SignIn
                    </NavigationMenuItem>
                </ul>
            </nav>
        </aside>
    )
}
