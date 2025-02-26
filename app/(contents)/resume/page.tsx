import {
    getCareers,
    getEducations,
    getShares,
} from "@/app/(contents)/resume/actions"

export default async function Resume() {
    const careers = await getCareers()
    const educations = await getEducations()
    const shares = await getShares()

    return (
        <>
            <div></div>
            <div className="flex flex-col gap-16">
                <section>
                    <h2 className="mb-5 text-3xl font-semibold">
                        안녕하세요!🖐️
                        <br />
                        기록과 소통을 좋아하는 안제민입니다.
                    </h2>
                    <p className="text-xl">
                        배운 것을&nbsp;
                        <span className="font-semibold text-orange-400">
                            기록
                        </span>
                        하고&nbsp;
                        <span className="font-semibold text-orange-400">
                            공유
                        </span>
                        하는 것을 좋아합니다.
                        <br />
                        <span className="font-semibold text-orange-400">
                            커뮤니케이션
                        </span>
                        이 생산성과 협업에 도움이 되기에 항상 원활한&nbsp;
                        <span className="font-semibold text-orange-400">
                            커뮤니케이션
                        </span>
                        을 위해 노력합니다.
                        <br />
                    </p>
                </section>
                <section>
                    <h2 className="mb-5 text-4xl font-semibold">Career</h2>
                    <div className="flex flex-col gap-6">
                        {careers.map((career) => (
                            <article
                                key={career.id}
                                className="flex flex-col gap-4"
                            >
                                <h3 className="text-2xl font-semibold">
                                    {career.title}
                                </h3>
                                <span className="text-md">
                                    {career.employment_start_date}&nbsp;~&nbsp;
                                    {career.employment_end_date}
                                </span>
                                <div>
                                    {career.description.map((desc, index) => (
                                        <p key={index}>{desc}</p>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="mb-5 text-4xl font-semibold">Education</h2>
                    {educations.map((education) => (
                        <article
                            key={education.id}
                            className="flex flex-col gap-4"
                        >
                            <h3 className="text-2xl font-semibold">
                                {education.title}
                            </h3>
                            <span>
                                {education.education_start_date}&nbsp;~&nbsp;
                                {education.education_end_date}
                            </span>
                            {education.description.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </article>
                    ))}
                </section>
                <section>
                    <h2 className="mb-5 text-4xl font-semibold">Share</h2>
                    {shares.map((share) => (
                        <article key={share.id} className="flex flex-col gap-4">
                            <h3 className="text-2xl font-semibold">
                                {share.title}
                            </h3>
                            {share.description.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </article>
                    ))}
                </section>
            </div>
        </>
    )
}
