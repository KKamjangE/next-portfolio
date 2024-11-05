import Spline from "@splinetool/react-spline/next"

import IntroNav from "@/app/(introduction)/intro-nav"

export default async function Home() {
    return (
        <section className="relative max-h-screen min-h-screen overflow-hidden">
            <Spline
                scene="https://prod.spline.design/Z-rpjFo7KruOYKch/scene.splinecode"
                className="h-full w-full"
            />
            <IntroNav />
            {/* <h1>안녕하세요. 기록과 소통을 좋아하는 안제민입니다.</h1>
            <p>배운 것을 기록하고 공유하는 것을 좋아합니다.</p>
            <p>항상 팀원들과 원활한 소통을 위해 노력합니다.</p>
            <section>
                <h1>참여한 서비스, 프로젝트 소개</h1>
            </section>
            <section>
                <h1>일과 관련된 경험 소개</h1>
            </section>
            <section>
                <h1>기술, 학력 소개</h1>
            </section> */}
        </section>
    )
}
