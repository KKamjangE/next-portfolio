import { getProjects } from "@/app/(home)/actions"
import ProjectArticle from "@/app/(home)/project-article"

export default async function Home() {
    const projects = await getProjects()
    return (
        <div>
            <h1>본인 소개</h1>
            <section>
                <h1>참여한 서비스, 프로젝트 소개</h1>
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
            </section>
            <section>
                <h1>일과 관련된 경험 소개</h1>
            </section>
            <section>
                <h1>기술, 학력 소개</h1>
            </section>
        </div>
    )
}
