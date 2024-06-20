import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "안제민 포트폴리오",
    description: "프론트엔드 엔지니어 안제민입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${notoSansKr.className} mx-auto min-h-screen w-full max-w-screen-sm`}
            >
                {children}
            </body>
        </html>
    );
}
