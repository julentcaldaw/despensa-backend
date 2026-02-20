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
PORT=3002
DATABASE_URL="mysql://root:@localhost:3306/despensa_db"
JWT_SECRET=supersecreto123
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
