# Despensa Backend (Node.js + Express + Prisma)

## Dependencias principales
- **Express**: Framework principal para el backend (se instala automáticamente con `npm install`).
- **Node.js**: Requisito para ejecutar el backend (verifica que esté instalado en tu sistema).

> Al ejecutar `npm install`, se instalarán todas las dependencias necesarias, incluyendo Express, Prisma, dotenv, JWT, etc.

## Requisitos
- Node.js >= 18
- MySQL

## Instalación
```bash
npm install
```


## Variables de entorno
Crea un archivo `.env` en la raíz con:
```
PORT=5000
DATABASE_URL="postgresql://..."
JWT_SECRET=supersecreto123
# Permite varios orígenes separados por coma para CORS (útil para local y producción)
CORS_ORIGINS=https://despensa-frontend-dc3k.onrender.com,http://localhost:5050
```

En Render, configura la variable de entorno `CORS_ORIGINS` para incluir los orígenes que necesites (por ejemplo, solo el frontend en producción o también localhost para pruebas temporales).

## Variables de entorno para recetas Edamam
Agrega estas variables en tu archivo `.env`:
```
EDAMAM_APP_ID=tu_app_id
EDAMAM_API_KEY=tu_api_key
```

## Migraciones y Prisma
```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Scripts útiles
- `npm run dev` — Inicia el servidor en modo desarrollo
- `npm run start` — Inicia el servidor en modo producción

## Estructura recomendada
- `src/controllers/` — Lógica de negocio
- `src/routes/` — Definición de rutas
- `src/middlewares/` — Middlewares personalizados
- `src/config/` — Configuración de la app
- `prisma/schema.prisma` — Esquema de base de datos

## Endpoints ejemplo
- `/api/users` — CRUD de usuarios
- `/api/pantry` — CRUD de despensa

## Autenticación
- JWT en header Authorization

# Cambios recientes y mejoras

## Integración Edamam
- El backend ahora utiliza la API de Edamam para obtener recetas.
- Las credenciales de Edamam se gestionan por variables de entorno: `EDAMAM_APP_ID`, `EDAMAM_API_KEY`, `EDAMAM_ACCOUNT_USER`.
- El backend traduce automáticamente los ingredientes al inglés usando Google Translate API y una tabla de equivalencias manual para mejorar la precisión.
- El frontend nunca llama directamente a Edamam, evitando problemas de CORS.

## Endpoints de recetas
- `/api/recipes/desde-lista` (POST): Recibe una lista de ingredientes y un parámetro opcional `maxTime` (minutos). Devuelve recetas que contengan cualquiera de los ingredientes (lógica OR) y filtra por tiempo si se especifica.
- `/api/recipes/desde-despensa` (POST): Recibe el token del usuario, obtiene los ingredientes de la despensa y devuelve recetas usando la misma lógica de traducción y filtrado.

## Filtro por tiempo
- El backend filtra recetas por tiempo de elaboración (`totalTime` en minutos) si se envía el parámetro `maxTime`.
- Si una receta no tiene información de tiempo (`totalTime = 0`), igual se incluye en los resultados para no perder opciones.

## Traducción de ingredientes
- Traducción automática con Google Translate API.
- Tabla de equivalencias manual para ingredientes comunes en español.

## Seguridad y buenas prácticas
- Todas las credenciales y claves API se gestionan por `.env`.
- El backend valida los parámetros recibidos y responde con errores claros si faltan datos.
- JWT obligatorio para endpoints protegidos.

## Ejemplo de uso de endpoint de recetas
```json
POST /api/recipes/desde-lista
{
  "ingredients": ["tomate", "ajo", "pollo"],
  "maxTime": 30
}
```

## Notas adicionales
- El backend deduplica recetas para evitar resultados repetidos.
- El filtro por tiempo solo afecta recetas con tiempo conocido, pero no excluye las que no lo tienen.
- El sistema está preparado para ampliarse con más equivalencias o mejoras de traducción.

---
