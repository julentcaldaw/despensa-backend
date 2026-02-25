-- CreateEnum
CREATE TYPE "diet_restriction" AS ENUM ('sin_gluten', 'sin_lactosa', 'aplv', 'frutos_secos', 'cacahuetes', 'marisco', 'pescado', 'huevo', 'soja', 'sesamo', 'mostaza', 'apio', 'sulfitos', 'altramuces', 'diabeticos', 'fodmap', 'fructosa', 'histamina', 'hiposodica', 'bajo_potasio', 'bajo_purinas', 'bajo_residuos', 'fenilcetonuria', 'astringente');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "dietRestrictions" "diet_restriction"[];
