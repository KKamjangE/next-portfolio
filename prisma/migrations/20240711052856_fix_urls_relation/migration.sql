/*
  Warnings:

  - Made the column `projectsId` on table `Urls` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Urls" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "github" TEXT,
    "blog" TEXT,
    "site" TEXT,
    "projectsId" TEXT NOT NULL,
    CONSTRAINT "Urls_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Urls" ("blog", "github", "id", "projectsId", "site") SELECT "blog", "github", "id", "projectsId", "site" FROM "Urls";
DROP TABLE "Urls";
ALTER TABLE "new_Urls" RENAME TO "Urls";
CREATE UNIQUE INDEX "Urls_projectsId_key" ON "Urls"("projectsId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
