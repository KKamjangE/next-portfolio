/*
  Warnings:

  - You are about to drop the column `urlsId` on the `Projects` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Projects" ("createdAt", "endDate", "id", "startDate", "title", "updatedAt") SELECT "createdAt", "endDate", "id", "startDate", "title", "updatedAt" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
