-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "urlsId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Projects_urlsId_fkey" FOREIGN KEY ("urlsId") REFERENCES "Urls" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Urls" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "github" TEXT,
    "blog" TEXT,
    "site" TEXT
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "projectsId" TEXT,
    CONSTRAINT "Skill_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
