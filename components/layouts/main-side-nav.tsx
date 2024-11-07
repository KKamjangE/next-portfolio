"use client"

import { useState } from "react"

import { MenuIcon } from "lucide-react"

import NavItem from "@/components/layouts/nav-item"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function MainSideNav() {
    const [isOpen, setIsOpen] = useState(false)

    const sheetClose = () => {
        setIsOpen(false)
    }

    const sheetOpenChange = (open: boolean) => {
        setIsOpen(open)
    }

    return (
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={sheetOpenChange}>
                <SheetTrigger asChild>
                    <MenuIcon className="hover:cursor-pointer" />
                </SheetTrigger>
                <SheetContent side={"left"} className="border-neutral-600">
                    <SheetHeader className="text-left">
                        <SheetTitle>안제민</SheetTitle>
                        <SheetDescription>FrontEnd</SheetDescription>
                    </SheetHeader>
                    <nav className="mt-8">
                        <ul>
                            <NavItem href="/" onClick={sheetClose}>
                                Introduction
                            </NavItem>
                            <NavItem href="/sign" onClick={sheetClose}>
                                SignIn
                            </NavItem>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}
