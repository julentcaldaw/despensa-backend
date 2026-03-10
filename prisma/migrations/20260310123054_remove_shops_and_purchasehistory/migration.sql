/*
  Warnings:

  - You are about to drop the column `shopId` on the `shoppingList` table. All the data in the column will be lost.
  - You are about to drop the `PurchaseHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PurchaseHistory" DROP CONSTRAINT "PurchaseHistory_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseHistory" DROP CONSTRAINT "PurchaseHistory_shopId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseHistory" DROP CONSTRAINT "PurchaseHistory_userId_fkey";

-- DropForeignKey
ALTER TABLE "shop" DROP CONSTRAINT "shop_userId_fkey";

-- DropForeignKey
ALTER TABLE "shoppingList" DROP CONSTRAINT "shoppingList_shopId_fkey";

-- DropIndex
DROP INDEX "shoppingList_shopId_idx";

-- AlterTable
ALTER TABLE "shoppingList" DROP COLUMN "shopId";

-- DropTable
DROP TABLE "PurchaseHistory";

-- DropTable
DROP TABLE "shop";
