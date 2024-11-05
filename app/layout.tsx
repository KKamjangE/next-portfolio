import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Jemin's Docs",
    description: "안녕하세요! 안제민입니다.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${notoSansKr.className}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <main className="min-h-screen">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    )
}
