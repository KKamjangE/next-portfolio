import Header from "@/components/layouts/header"

export default function ContentsLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header />
            <div className="container mt-3 flex-1 gap-8 p-3 md:grid md:grid-cols-[220px_minmax(0,1fr)]">
                {children}
            </div>
        </>
    )
}
