"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

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
            <Sun className="rotate-0 scale-100 transition dark:-rotate-180 dark:scale-0" />
            <Moon className="absolute rotate-180 scale-0 transition dark:rotate-0 dark:scale-100" />
        </Button>
    )
}
