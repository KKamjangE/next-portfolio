import ProductNav from "@/app/(contents)/product/product-nav"

export default async function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ProductNav />
            {children}
        </>
    )
}
