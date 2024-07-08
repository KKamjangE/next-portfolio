/*
  Warnings:

  - You are about to drop the column `description` on the `Projects` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "ProjectDescription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "projectsId" TEXT,
    CONSTRAINT "ProjectDescription_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "urlsId" TEXT
);
INSERT INTO "new_Projects" ("createdAt", "endDate", "id", "startDate", "title", "updatedAt", "urlsId") SELECT "createdAt", "endDate", "id", "startDate", "title", "updatedAt", "urlsId" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE TABLE "new_Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "projectsId" TEXT,
    CONSTRAINT "Skill_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Skill" ("id", "name", "projectsId") SELECT "id", "name", "projectsId" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
CREATE TABLE "new_Urls" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "github" TEXT,
    "blog" TEXT,
    "site" TEXT,
    "projectsId" TEXT,
    CONSTRAINT "Urls_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Urls" ("blog", "github", "id", "site") SELECT "blog", "github", "id", "site" FROM "Urls";
DROP TABLE "Urls";
ALTER TABLE "new_Urls" RENAME TO "Urls";
CREATE UNIQUE INDEX "Urls_projectsId_key" ON "Urls"("projectsId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
