/*
  Warnings:

  - You are about to drop the column `cantidad` on the `ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `ingredient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ingredient` DROP COLUMN `cantidad`,
    DROP COLUMN `unit`;
