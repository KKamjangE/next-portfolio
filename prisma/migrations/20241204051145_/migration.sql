/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Career` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Education` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Share` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Career_title_key" ON "Career"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Education_title_key" ON "Education"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Share_title_key" ON "Share"("title");
