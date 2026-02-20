/*
  Warnings:

  - You are about to drop the column `state` on the `ingredient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ingredient` DROP COLUMN `state`,
    ADD COLUMN `category` ENUM('FRUTAS_VERDURAS', 'CARNES_PESCADOS', 'LACTEOS_HUEVOS', 'DESPENSA_GRANOS', 'CONDIMENTOS_ACEITES', 'SNACKS_EXTRAS') NULL,
    ADD COLUMN `priority` VARCHAR(191) NULL;
