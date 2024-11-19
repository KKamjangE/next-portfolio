"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { mainNav } from "@/app/config/nav"

import { cn } from "@/lib/utils"

export default function MainNav() {
    const pathname = usePathname()

    return (
        <div className="flex">
            <Link href={"/"} className="ml-4 mr-6 md:ml-0">
                <h1>Jemin&apos;s PortFolio</h1>
            </Link>
            <nav className="hidden items-center gap-4 text-sm md:flex">
                {mainNav.map((nav, index) => (
                    <Link
                        key={index}
                        href={nav.href}
                        className={cn(
                            "transition-opacity hover:opacity-100",
                            pathname.startsWith(nav.href)
                                ? "opacity-100"
                                : "opacity-50",
                        )}
                    >
                        {nav.title}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
