import NavigationMenuItem from "@/components/navigation/navigation-menu-item"

export default function SideNavigationMenu() {
    return (
        <aside className="hidden md:block">
            <nav>
                <ul>
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
