"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function MainNav() {
    const pathname = usePathname()

    return (
        <div className="flex">
            <Link href={"/"} className="ml-4 mr-6 md:ml-0">
                <h1>Jemin&apos;s PortFolio</h1>
            </Link>
            <nav className="hidden items-center gap-4 text-sm md:flex">
                <Link
                    href={"/projects"}
                    className={cn(
                        "transition-opacity hover:opacity-100",
                        pathname.startsWith("/projects")
                            ? "opacity-100"
                            : "opacity-50",
                    )}
                >
                    Projects
                </Link>
            </nav>
        </div>
    )
}
