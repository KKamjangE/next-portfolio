import { Button } from "@/components/ui/button"
import { formatToKRDate } from "@/lib/utils"
import Link from "next/link"

interface ProjectArticleProps {
    title: string
    descriptions: { description: string }[]
    startDate: Date
    endDate: Date | null
    urls: { github: string | null; blog: string | null; site: string | null }
    skills: { name: string }[]
}

export default function ProjectArticle({
    title,
    descriptions,
    startDate,
    endDate,
    urls: { github, blog, site },
    skills,
}: ProjectArticleProps) {
    return (
        <article className="rounded-md border border-neutral-700 bg-blue-950/30 p-5">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <ul className="list-disc pl-5 marker:text-blue-500">
                {descriptions.map((description, index) => (
                    <li key={index}> {description.description}</li>
                ))}
            </ul>
            <div className="flex justify-center gap-3">
                {github && (
                    <Button variant={"link"}>
                        <Link href={github} target="_blank">
                            Github
                        </Link>
                    </Button>
                )}
                {blog && (
                    <Button variant={"link"}>
                        <Link href={blog} target="_blank">
                            Blog
                        </Link>
                    </Button>
                )}
                {site && (
                    <Button variant={"link"}>
                        <Link href={site} target="_blank">
                            Site
                        </Link>
                    </Button>
                )}
            </div>
            <div className="flex justify-center">
                {skills.map((skill) => (
                    <p key={skill.name}>{skill.name}</p>
                ))}
            </div>
            <p className="text-sm">
                {formatToKRDate(startDate)}~
                {endDate ? formatToKRDate(endDate) : "진행 중"}
            </p>
        </article>
    )
}
