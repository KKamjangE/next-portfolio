"use client"

import { useTheme } from "next-themes"

import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ThemeButton() {
    const { theme, systemTheme, setTheme } = useTheme()

    const onChangeTheme = () => {
        let currentTheme
        if (theme === "system") {
            currentTheme = systemTheme
        } else {
            currentTheme = theme
        }
        setTheme(currentTheme === "dark" ? "light" : "dark")
    }

    return (
        <Button
            variant={"ghost"}
            size={"icon"}
            onClick={onChangeTheme}
            className="transition duration-300"
        >
            <SunIcon className="rotate-0 scale-100 transition dark:-rotate-180 dark:scale-0" />
            <MoonIcon className="absolute rotate-180 scale-0 transition dark:rotate-0 dark:scale-100" />
        </Button>
    )
}
