import ProjectArticle from "@/app/(contents)/projects/project-article"
import { getProjects } from "@/app/(introduction)/actions"

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
