# QA Mercado Libre - Versión Simple

Este proyecto contiene pruebas automatizadas para Mercado Libre, usando Playwright y Cucumber.

## Instalación

```bash
npm install
npx playwright install

## Casos de prueba automatizados

- Búsqueda de iPhone 13 con almacenamiento específico.
- Intento de compra que solicita ingreso de usuario.
- Validación de datos de configuración y monedas desde la API pública.

## Notas sobre pruebas fallidas intencionales

Como parte de los requisitos del ejercicio, se incluyeron **dos escenarios diseñados para fallar** de forma controlada, con el objetivo de:

- Verificar el comportamiento del sistema ante errores.
- Generar capturas de pantalla automáticas con Playwright.
- Cumplir con el requerimiento de mostrar errores en el reporte de pruebas.

## Escenarios que fallan:
- Buscar iPhone 13 con almacenamiento específico

- Buscar un producto inexistente

Ambos fallan en el paso Given que el usuario abre Mercado Libre, generando un timeout al intentar abrir el sitio. Esto simula situaciones de red lenta o problemas de carga inicial.
