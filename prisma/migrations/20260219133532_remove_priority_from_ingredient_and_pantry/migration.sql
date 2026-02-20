/*
  Warnings:

  - You are about to drop the column `priority` on the `ingredient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ingredient` DROP COLUMN `priority`;

-- AlterTable
ALTER TABLE `pantry` ADD COLUMN `category` ENUM('frutas_verduras', 'carnes_pescados', 'lacteos_huevos', 'despensa_granos', 'condimentos_aceites', 'snacks_extras') NULL;
