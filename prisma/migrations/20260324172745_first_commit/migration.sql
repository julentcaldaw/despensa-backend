/*
  Warnings:

  - You are about to drop the `PurchaseHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PurchaseHistory" DROP CONSTRAINT "PurchaseHistory_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseHistory" DROP CONSTRAINT "PurchaseHistory_shopId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseHistory" DROP CONSTRAINT "PurchaseHistory_userId_fkey";

-- DropTable
DROP TABLE "PurchaseHistory";

-- CreateTable
CREATE TABLE "purchaseHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "shopId" INTEGER,
    "quantity" DOUBLE PRECISION NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purchaseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "purchaseHistory_userId_idx" ON "purchaseHistory"("userId");

-- CreateIndex
CREATE INDEX "purchaseHistory_ingredientId_idx" ON "purchaseHistory"("ingredientId");

-- CreateIndex
CREATE INDEX "purchaseHistory_shopId_idx" ON "purchaseHistory"("shopId");

-- AddForeignKey
ALTER TABLE "purchaseHistory" ADD CONSTRAINT "purchaseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchaseHistory" ADD CONSTRAINT "purchaseHistory_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchaseHistory" ADD CONSTRAINT "purchaseHistory_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
