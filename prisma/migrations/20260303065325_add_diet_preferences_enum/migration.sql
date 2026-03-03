-- CreateEnum
CREATE TYPE "public"."diet_preference" AS ENUM ('vegetarian', 'lacto_vegetarian', 'ovo_vegetarian', 'vegan', 'pescetarian', 'keto', 'paleo');

-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "dietPreferences" "public"."diet_preference"[];
