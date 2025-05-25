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

Se han implementado pruebas unitarias utilizando Jest para los siguientes componentes:

1. **Componentes de UI Básicos**:
   - `SearchItemsHeader`.
2. **Unidades de código**:
   - Cliente API que consume la API externa.

#### Pruebas E2E (End-to-End)
```bash
cd client
npm run cypress:open  # Ejecutar pruebas E2E
```
Las pruebas E2E simulan el comportamiento real del usuario en la aplicación. **Importante**: Para ejecutar las pruebas E2E, tanto el frontend como el backend deben estar en ejecución:
- Frontend en `http://localhost:3000`
- Backend en `http://localhost:3001`

Se han implementado pruebas E2E utilizando Cypress en dos áreas principales:

1. **Pruebas de Ejemplo**:
   - Directorio `e2e-example/` con pruebas de ejemplo para demostrar la configuración

2. **Pruebas de Funcionalidad Principal**:
   - Directorio `items/` con pruebas que cubren:
     - Búsqueda de productos
     - Visualización de detalles de productos
     - Navegación por categorías
     - Comportamiento de la interfaz de usuario

## 📚 Documentación de la API

La documentación de la API está disponible en:
```
http://localhost:3001/api-docs
```

## 🎯 Decisiones Técnicas y Detalles de Implementación

### Arquitectura Frontend (Next.js)

#### Herramientas de Desarrollo y Configuración
- **Integración de ESLint**
  - ✅ Ventajas: Refuerza un estilo de código consistente, detecta errores potenciales temprano, mejora la calidad del código
  - ⚠️ Consideraciones: Tiempo de configuración inicial, necesidad de mantener la configuración

- **Implementación del App Router**
  - ✅ Ventajas: Mejor rendimiento, capacidades de enrutamiento mejoradas, layouts incorporados
  - ⚠️ Consideraciones: Curva de aprendizaje para miembros del equipo familiarizados con Pages Router

- **Uso de Turbopack**
  - ✅ Ventajas: Inicio más rápido del servidor de desarrollo, mejor hot module replacement
  - ⚠️ Consideraciones: Aún en beta, puede tener problemas ocasionales de estabilidad

- **Configuración de Alias de Importación**
  - ✅ Ventajas: Importaciones más limpias, mejor organización del código, refactorización más sencilla
  - ⚠️ Consideraciones: Necesidad de mantener las configuraciones de rutas. Necesidad de establecer un
  estándar para todo el equipo de tal manera que se mantenga la consistencia.

#### Stack Tecnológico
- **React 19**
  - ✅ Ventajas: Últimas características, rendimiento mejorado, mejor experiencia de desarrollo
  - ⚠️ Consideraciones: Puede requerir capacitación del equipo, posibles problemas de compatibilidad con algunas librerías

- **Infraestructura de Testing**
  - **Cypress para Testing E2E**
    - ✅ Ventajas: Testing en navegador real, excelentes capacidades de depuración, tests confiables
    - ⚠️ Consideraciones: Más lento que los tests unitarios, requiere más mantenimiento, a menudo requiere orquestación con los servicios externos consumidos.
  
  - **Jest para Testing Unitario y de Componentes**
    - ✅ Ventajas: Ejecución rápida, gran integración con React, ecosistema extenso
    - ⚠️ Consideraciones: Complejidad de configuración cuando se usa con Next.js

#### Detalles de Implementación

- **Estados de Carga**
  - ✅ Ventajas: Mejor experiencia de usuario, reducción del tiempo percibido de carga
  - ⚠️ Consideraciones: Tiempo adicional de desarrollo para componentes skeleton

### Arquitectura Backend (Express)

#### Uso de API real
Se hacen consultas a una API mock real, no se mantienen los mocks quemados en el código.

#### Documentación de API
- **Integración de Swagger**
  - ✅ Ventajas: API auto-documentada, documentación interactiva, soporte para generación de clientes
  - ⚠️ Consideraciones: Mantenimiento adicional de la documentación, curva de aprendizaje para el equipo