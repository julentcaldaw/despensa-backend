-- AlterTable
ALTER TABLE "shoppingList" ADD COLUMN     "shopId" INTEGER;

-- CreateTable
CREATE TABLE "shop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_normalized" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "shopId" INTEGER,
    "quantity" DOUBLE PRECISION NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PurchaseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shop_userId_name_normalized_key" ON "shop"("userId", "name_normalized");

-- CreateIndex
CREATE INDEX "PurchaseHistory_userId_idx" ON "PurchaseHistory"("userId");

-- CreateIndex
CREATE INDEX "PurchaseHistory_ingredientId_idx" ON "PurchaseHistory"("ingredientId");

-- CreateIndex
CREATE INDEX "PurchaseHistory_shopId_idx" ON "PurchaseHistory"("shopId");

-- CreateIndex
CREATE INDEX "shoppingList_shopId_idx" ON "shoppingList"("shopId");

-- AddForeignKey
ALTER TABLE "shop" ADD CONSTRAINT "shop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shoppingList" ADD CONSTRAINT "shoppingList_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
