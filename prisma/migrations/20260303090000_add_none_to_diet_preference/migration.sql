-- Agrega el valor 'none' al enum diet_preference en PostgreSQL
ALTER TYPE "public"."diet_preference" ADD VALUE IF NOT EXISTS 'none';
