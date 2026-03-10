-- AlterTable
ALTER TABLE "pantry" ADD COLUMN     "cantidad" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "shoppingList" ADD COLUMN     "cantidad" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "PurchaseHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "shopId" INTEGER,
    "cantidad" DOUBLE PRECISION,
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PurchaseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PurchaseHistory_userId_idx" ON "PurchaseHistory"("userId");

-- CreateIndex
CREATE INDEX "PurchaseHistory_ingredientId_idx" ON "PurchaseHistory"("ingredientId");

-- CreateIndex
CREATE INDEX "PurchaseHistory_shopId_idx" ON "PurchaseHistory"("shopId");

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
