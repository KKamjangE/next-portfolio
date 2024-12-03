import Link from "next/link"

import { mainNav } from "@/app/config/nav"
import NavItem from "@/components/layouts/nav-item"
import { Button } from "@/components/ui/button"

export default function MainNav() {
    return (
        <div className="items-start justify-start md:flex">
            <Link href={"/"} className="ml-4 mr-6 md:ml-0">
                <h1 className="text-xl">Jemin&apos;s PortFolio</h1>
            </Link>
            <nav className="hidden gap-0 md:flex md:gap-2">
                {mainNav.map((nav, index) => (
                    <NavItem key={index} href={nav.href}>
                        <Button variant={"link"} className="text-md">
                            {nav.title}
                        </Button>
                    </NavItem>
                ))}
            </nav>
        </div>
    )
}
