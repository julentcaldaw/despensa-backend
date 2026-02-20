/*
  Warnings:

  - Added the required column `cantidad` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ingredient` ADD COLUMN `cantidad` ENUM('poco', 'normal', 'bastante') NOT NULL;
