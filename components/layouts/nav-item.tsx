"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface NavigationMenuItemProps {
    href: string
    children: ReactNode
    onClick?: () => void
}

export default function NavItem({
    href,
    onClick,
    children,
}: NavigationMenuItemProps) {
    const pathname = usePathname()

    return (
        <li>
            <Link
                href={href}
                onClick={onClick}
                className={`text-md ${pathname == href ? "opacity-100" : "opacity-40"} transition-opacity hover:opacity-100`}
            >
                {children}
            </Link>
        </li>
    )
}
