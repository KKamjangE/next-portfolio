import Link from "next/link"

import { siteConfig } from "@/app/config/site"

export default function IntroNav() {
    return (
        <>
            <div className="absolute left-10 right-10 top-10 flex justify-between align-middle">
                <h2 className="text-5xl font-semibold">
                    Jemin&apos;s PortFolio
                </h2>
                <nav className="flex gap-12 *:text-4xl *:font-semibold">
                    <Link href={siteConfig.links.github}>
                        <span>Github</span>
                    </Link>
                    <Link href={siteConfig.links.velog}>
                        <span>Velog</span>
                    </Link>
                </nav>
            </div>
            <div className="absolute bottom-10 left-10 text-2xl font-semibold">
                lastupdated: https://github.com/orgs/vercel/discussions/587
            </div>
        </>
    )
}
