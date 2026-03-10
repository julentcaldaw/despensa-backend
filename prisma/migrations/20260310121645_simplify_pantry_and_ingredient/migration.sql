/*
  Warnings:

  - You are about to drop the column `category` on the `pantry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pantry" DROP COLUMN "category";

-- DropEnum
DROP TYPE "ingredient_priority";
