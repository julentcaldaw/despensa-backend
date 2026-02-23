-- CreateTable
CREATE TABLE "shop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shoppingList" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "shopId" INTEGER,
    "bought" BOOLEAN DEFAULT false,

    CONSTRAINT "shoppingList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shop_userId_name_key" ON "shop"("userId", "name");

-- CreateIndex
CREATE INDEX "shoppingList_userId_idx" ON "shoppingList"("userId");

-- CreateIndex
CREATE INDEX "shoppingList_ingredientId_idx" ON "shoppingList"("ingredientId");

-- CreateIndex
CREATE INDEX "shoppingList_shopId_idx" ON "shoppingList"("shopId");

-- CreateIndex
CREATE UNIQUE INDEX "shoppingList_userId_ingredientId_key" ON "shoppingList"("userId", "ingredientId");

-- AddForeignKey
ALTER TABLE "shop" ADD CONSTRAINT "shop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shoppingList" ADD CONSTRAINT "shoppingList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shoppingList" ADD CONSTRAINT "shoppingList_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shoppingList" ADD CONSTRAINT "shoppingList_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
