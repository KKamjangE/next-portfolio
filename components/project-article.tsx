import { formatToKRDate } from "@/lib/utils"
import Link from "next/link"

interface ProjectArticleProps {
    title: string
    description: string
    startDate: Date
    endDate: Date
    urls: { github: string | null; blog: string | null; site: string | null }
    skills: { name: string }[]
}

export default function ProjectArticle({
    title,
    description,
    startDate,
    endDate,
    urls: { github, blog, site },
    skills,
}: ProjectArticleProps) {
    return (
        <article className="rounded-md border border-neutral-700 bg-blue-950/30 p-5">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>{description}</p>
            <p className="text-sm">
                {formatToKRDate(startDate)}~
                {formatToKRDate(endDate) ?? "진행 중"}
            </p>
            <div className="flex gap-3">
                {github && (
                    <Link href={github} target="_blank">
                        Github
                    </Link>
                )}
                {blog && (
                    <Link href={blog} target="_blank">
                        Blog
                    </Link>
                )}
                {site && (
                    <Link href={site} target="_blank">
                        Site
                    </Link>
                )}
            </div>
            {skills.map((skill) => (
                <p key={skill.name}>{skill.name}</p>
            ))}
        </article>
    )
}
