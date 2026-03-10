/*
  Warnings:

  - You are about to drop the column `cantidad` on the `PurchaseHistory` table. All the data in the column will be lost.
  - You are about to drop the column `cantidad` on the `pantry` table. All the data in the column will be lost.
  - You are about to drop the column `cantidad` on the `shoppingList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PurchaseHistory" DROP COLUMN "cantidad",
ADD COLUMN     "quantity" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "pantry" DROP COLUMN "cantidad",
ADD COLUMN     "quantity" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "shoppingList" DROP COLUMN "cantidad",
ADD COLUMN     "quantity" DOUBLE PRECISION;
