# Despensa Backend (Node.js + Express + Prisma)

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

---
