# Catálogo de productos

Interfaz estática desarrollada con React, TypeScript, Vite y Tailwind CSS. El formulario es solo visual y no se conecta al backend, tal como solicita la consigna.

## Requisitos y ejecución

Se requiere Node.js 20.19 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Para compilar y verificar los tipos de TypeScript:

```bash
pnpm build
```

## Estructura

- `src/types/producto.ts`: contrato estático `Producto` (`id`, `nombre`, `descripcion`, `precio`).
- `src/components/`: Navbar, ProductoCard, ProductoList, ProductoForm y Footer.
- `src/App.tsx`: composición de la pantalla y datos de ejemplo.

Los componentes son funciones puras, reciben props tipados cuando corresponde y no utilizan hooks ni llamadas a API.
