import { Metadata } from "next"

import SideNavigationMenu from "@/components/side-navigation-menu"

export const metadata: Metadata = {
    title: "참여한 프로젝트",
    description: "프로젝트 소개와 설명",
}

export default async function ProjectsLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            {/* <SideNavigationMenu /> */}
            {children}
        </div>
    )
}
