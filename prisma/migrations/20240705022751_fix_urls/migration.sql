-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "urlsId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Projects_urlsId_fkey" FOREIGN KEY ("urlsId") REFERENCES "Urls" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Projects" ("createdAt", "description", "endDate", "id", "startDate", "title", "updatedAt", "urlsId") SELECT "createdAt", "description", "endDate", "id", "startDate", "title", "updatedAt", "urlsId" FROM "Projects";
DROP TABLE "Projects";
ALTER TABLE "new_Projects" RENAME TO "Projects";
CREATE UNIQUE INDEX "Projects_urlsId_key" ON "Projects"("urlsId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
