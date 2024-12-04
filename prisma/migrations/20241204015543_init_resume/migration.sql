/*
  Warnings:

  - You are about to drop the `Projects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Urls` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Urls" DROP CONSTRAINT "Urls_projectsId_fkey";

-- DropTable
DROP TABLE "Projects";

-- DropTable
DROP TABLE "Urls";

-- CreateTable
CREATE TABLE "Career" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "employment_start_date" TIMESTAMP(3) NOT NULL,
    "employment_end_date" TIMESTAMP(3),
    "description" TEXT[],

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "education_start_date" TIMESTAMP(3) NOT NULL,
    "education_end_date" TIMESTAMP(3),
    "description" TEXT[],

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Share" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT[],

    CONSTRAINT "Share_pkey" PRIMARY KEY ("id")
);
