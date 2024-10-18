import { getProjects } from "@/app/(home)/actions"
import ProjectArticle from "@/app/(home)/project-article"

export default async function Projects() {
    const projects = await getProjects()

    return (
        <div>
            {projects.map((project) => (
                <ProjectArticle
                    key={project.id}
                    descriptions={project.descriptions}
                    title={project.title}
                    startDate={project.startDate}
                    endDate={project.endDate}
                    urls={project.urls!}
                    skills={project.skills}
                />
            ))}
        </div>
    )
}
