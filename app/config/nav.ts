export interface NavItem {
    title: string
    href: string
}

export const mainNav: NavItem[] = [{ title: "Product", href: "/product" }]
export const mainSideNav: NavItem[] = [
    { title: "Introduction", href: "/" },
    { title: "Sign", href: "/sign" },
    { title: "Product", href: "/product" },
]