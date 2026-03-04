/*
  Warnings:

  - A unique constraint covering the columns `[userId,name_normalized]` on the table `shop` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."shop_userId_name_key";

-- AlterTable
ALTER TABLE "public"."shop" ADD COLUMN     "name_normalized" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "shop_userId_name_normalized_key" ON "public"."shop"("userId", "name_normalized");
