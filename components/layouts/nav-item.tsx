"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface NavigationMenuItemProps {
    className?: string
    href: string
    children: ReactNode
    onClick?: () => void
}

export default function NavItem({
    className,
    href,
    onClick,
    children,
}: NavigationMenuItemProps) {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "transition-opacity hover:opacity-100",
                pathname == href ? "opacity-100" : "opacity-40",
                className,
            )}
        >
            {children}
        </Link>
    )
}
