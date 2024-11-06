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
                    <a href={siteConfig.links.github} target="_blank">
                        <span>Github</span>
                    </a>
                    <a href={siteConfig.links.velog} target="_blank">
                        <span>Velog</span>
                    </a>
                </nav>
            </div>
            <div className="absolute bottom-10 left-10 text-2xl font-semibold">
                lastupdated: https://github.com/orgs/vercel/discussions/587
            </div>
        </>
    )
}
