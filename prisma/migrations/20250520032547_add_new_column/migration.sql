/*
  Warnings:

  - Added the required column `nascionalidade` to the `autores` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_autores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT,
    "nascionalidade" TEXT NOT NULL
);
INSERT INTO "new_autores" ("id", "nome", "sobrenome") SELECT "id", "nome", "sobrenome" FROM "autores";
DROP TABLE "autores";
ALTER TABLE "new_autores" RENAME TO "autores";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
