import Link from "next/link"

import { siteConfig } from "@/app/config/site"

export default function IntroNav() {
    return (
        <>
            <div className="absolute left-4 right-4 top-4 flex justify-between align-middle md:left-10 md:right-10 md:top-10">
                <h2 className="text-3xl font-semibold md:text-5xl">
                    Jemin&apos;s PortFolio
                </h2>
                <nav className="flex gap-6 *:text-2xl *:font-semibold md:gap-12 *:md:text-4xl">
                    <a href={siteConfig.links.github} target="_blank">
                        <span>Github</span>
                    </a>
                    <a href={siteConfig.links.velog} target="_blank">
                        <span>Velog</span>
                    </a>
                </nav>
            </div>
            <div className="absolute bottom-4 left-4 text-xl font-semibold md:bottom-10 md:left-10 md:text-2xl">
                lastupdated: https://github.com/orgs/vercel/discussions/587
            </div>
        </>
    )
}
