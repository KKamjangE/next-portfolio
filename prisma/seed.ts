import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
async function main() {
    await prisma.career.upsert({
        where: { title: "제이에스씨텍" },
        update: {},
        create: {
            title: "제이에스씨텍",
            employment_start_date: "2023-04-02",
            employment_end_date: "2024-07-02",
            description: ["설명1", "설명2", "설명3"],
        },
    })

    await prisma.education.upsert({
        where: { title: "대학교" },
        update: {},
        create: {
            title: "대학교",
            education_start_date: "2024-12-12",
            education_end_date: "2024-12-21",
            description: ["설명"],
        },
    })

    await prisma.share.upsert({
        where: { title: "Github" },
        update: {},
        create: {
            title: "Github",
            description: ["설명"],
            link: "link",
        },
    })
}

main()
    .catch((e) => {
        console.log(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
