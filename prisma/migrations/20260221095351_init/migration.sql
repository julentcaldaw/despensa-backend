-- CreateEnum
CREATE TYPE "ingredient_priority" AS ENUM ('alta', 'media', 'baja');

-- CreateEnum
CREATE TYPE "ingredient_category" AS ENUM ('frutas_verduras', 'carnes_pescados', 'lacteos_huevos', 'despensa_granos', 'condimentos_aceites', 'snacks_extras');

-- CreateTable
CREATE TABLE "ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "ingredient_category",

    CONSTRAINT "ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pantry" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "category" "ingredient_category",

    CONSTRAINT "pantry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Pantry_ingredientId_fkey" ON "pantry"("ingredientId");

-- CreateIndex
CREATE INDEX "Pantry_userId_fkey" ON "pantry"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "pantry" ADD CONSTRAINT "Pantry_ingredientId_rel" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pantry" ADD CONSTRAINT "Pantry_userId_rel" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
