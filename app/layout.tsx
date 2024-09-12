import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"

import Header from "@/components/header"
import SideNavigationMenu from "@/components/navigation/side-navigation-menu"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "안제민 포트폴리오",
    description: "프론트엔드 엔지니어 안제민입니다.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${notoSansKr.className} min-h-screen`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Header />
                    <div className="container mx-auto flex-1 gap-8 md:grid md:grid-cols-[220px_minmax(0,1fr)]">
                        <SideNavigationMenu />
                        <main className="mt-10 p-3">{children}</main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
