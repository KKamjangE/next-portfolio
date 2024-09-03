"use client"

import { useState } from "react"

import { MenuIcon } from "lucide-react"

import NavigationMenuItem from "@/components/navigation/navigation-menu-item"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function HeaderNavigationMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const sheetClose = () => {
        setIsOpen(false)
    }

    const sheetOpenChange = (open: boolean) => {
        setIsOpen(open)
    }

    return (
        <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={sheetOpenChange}>
                <SheetTrigger asChild>
                    <MenuIcon className="hover:cursor-pointer" />
                </SheetTrigger>
                <SheetContent side={"left"} className="border-neutral-600">
                    <SheetHeader className="text-left">
                        <SheetTitle>안제민</SheetTitle>
                        <SheetDescription>FrontEnd Engineer</SheetDescription>
                    </SheetHeader>
                    <nav className="mt-8">
                        <ul>
                            <NavigationMenuItem href="/" onClick={sheetClose}>
                                Introduction
                            </NavigationMenuItem>
                            <NavigationMenuItem
                                href="/sign"
                                onClick={sheetClose}
                            >
                                SignIn
                            </NavigationMenuItem>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}
