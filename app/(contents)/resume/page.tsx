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
