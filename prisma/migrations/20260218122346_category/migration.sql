/*
  Warnings:

  - The values [FRUTAS_VERDURAS,CARNES_PESCADOS,LACTEOS_HUEVOS,DESPENSA_GRANOS,CONDIMENTOS_ACEITES,SNACKS_EXTRAS] on the enum `ingredient_category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `ingredient` MODIFY `category` ENUM('frutas_verduras', 'carnes_pescados', 'lacteos_huevos', 'despensa_granos', 'condimentos_aceites', 'snacks_extras') NULL;
