# Prueba técnica para Mercado Libre

Este proyecto es mi solución a la prueba técnica de Mercado Libre que consta de una aplicación web frontend desarrollada con Next.js y un backend desarrollado con Node.js y Express.

## 🚀 Características

- Búsqueda de productos
- Visualización de detalles de productos
- Interfaz de usuario moderna y responsive
- API RESTful documentada con Swagger
- Pruebas automatizadas con Jest y Cypress

## 🛠️ Tecnologías Utilizadas

### Frontend (Client)
- Next.js 15.3.2
- React 19
- TypeScript
- SASS
- Jest para pruebas unitarias
- Cypress para pruebas E2E

### Backend (Server)
- Node.js
- Express
- TypeScript
- Swagger para documentación de API
- CORS habilitado

## 📋 Requisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Git

## 🔧 Instalación y Despliegue Local

### 1. Clonar el Repositorio
```bash
git clone https://github.com/ivanroguerre/market-free.git
cd market-free
```

### 2. Configurar el Backend
```bash
cd server
npm install
npm run build
npm run dev
```
El servidor se ejecutará en `http://localhost:3001`

### 3. Configurar el Frontend
```bash
cd client
npm install
npm run dev
```
La aplicación frontend se ejecutará en `http://localhost:3000`

## 🧪 Ejecutar Pruebas

### Frontend

#### Pruebas Unitarias
```bash
cd client
npm test        # Ejecutar pruebas unitarias
```
Las pruebas unitarias verifican el funcionamiento individual de componentes y funciones. Pueden ejecutarse en cualquier momento sin necesidad de tener la aplicación en ejecución.

#### Pruebas E2E (End-to-End)
```bash
cd client
npm run cypress:open  # Ejecutar pruebas E2E
```
Las pruebas E2E simulan el comportamiento real del usuario en la aplicación. **Importante**: Para ejecutar las pruebas E2E, tanto el frontend como el backend deben estar en ejecución:
- Frontend en `http://localhost:3000`
- Backend en `http://localhost:3001`

## 📚 Documentación de la API

La documentación de la API está disponible en:
```
http://localhost:3001/api-docs
```