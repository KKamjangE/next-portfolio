import Link from "next/link"

import { Button } from "@/components/ui/button"

import { formatToKRDate } from "@/lib/utils"

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
    urls,
    skills,
}: ProjectArticleProps) {
    return (
        <article className="flex max-w-screen-md flex-col gap-3">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <span className="text-sm">
                {formatToKRDate(startDate)}&nbsp;~&nbsp;
                {endDate ? formatToKRDate(endDate) : "진행 중"}
            </span>
            <ul className="list-disc pl-5 marker:text-amber-500 dark:marker:text-blue-500">
                {descriptions.map((description, index) => (
                    <li key={index}> {description.description}</li>
                ))}
            </ul>
            <h2 className="text-lg font-semibold">관련 링크</h2>
            <div className="flex justify-center gap-3">
                {urls?.github && (
                    <Button variant={"link"}>
                        <Link href={urls.github} target="_blank">
                            Github
                        </Link>
                    </Button>
                )}
                {urls?.blog && (
                    <Button variant={"link"}>
                        <Link href={urls.blog} target="_blank">
                            Blog
                        </Link>
                    </Button>
                )}
                {urls?.site && (
                    <Button variant={"link"}>
                        <Link href={urls.site} target="_blank">
                            Site
                        </Link>
                    </Button>
                )}
            </div>
            <h2 className="text-lg font-semibold">사용한 기술</h2>
            <ul className="list-disc pl-5 marker:text-amber-500 dark:marker:text-blue-500">
                {skills.map((skill) => (
                    <li key={skill.name}>{skill.name}</li>
                ))}
            </ul>
        </article>
    )
}
