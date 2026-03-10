/*
  Warnings:

  - You are about to drop the column `settings` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `stats` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecipeIngredient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeIngredient" DROP CONSTRAINT "RecipeIngredient_recipeId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "settings",
DROP COLUMN "stats";

-- DropTable
DROP TABLE "Recipe";

-- DropTable
DROP TABLE "RecipeIngredient";
