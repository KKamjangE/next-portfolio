import Header from "@/components/layouts/header"

export default async function SingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
