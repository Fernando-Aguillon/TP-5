# Gestor de Productos — Backend

Migración del gestor de productos del TP 4 a FastAPI, SQLModel y PostgreSQL. Se conservan el modelo y las validaciones del integrador (`nombre`, `categoria`, `precio`, `stock`, `stock_minimo`, `activo`), se agrega `descripcion` para que el recurso incluya los campos del tipo `Producto` de la consigna, y la capa de servicio aplica la unicidad normalizada del nombre.

## Requisitos

- Python 3.10 o superior.
- PostgreSQL instalado y en ejecución.

## Configuración

Desde esta carpeta, crear y activar un entorno virtual, e instalar las dependencias:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

Crear en PostgreSQL una base llamada `gestor_productos`. Copiar `.env.example` como `.env` y configurar las credenciales locales:

```powershell
Copy-Item .env.example .env
```

Editar `DATABASE_URL` en `.env` con el usuario, contraseña, host, puerto y base reales. No compartir ni incluir `.env` en la entrega. SQLModel crea la tabla al iniciar FastAPI.

## Ejecutar

Desde `fastapi_backend`, con el entorno virtual activo:

```powershell
uvicorn main:app --reload
```

- Swagger UI: <http://localhost:8000/docs>
- ReDoc: <http://localhost:8000/redoc>

## Endpoints

| Método | Ruta | Resultado |
| --- | --- | --- |
| POST | `/productos/` | Crear (201) |
| GET | `/productos/` | Listar con `skip` y `limit` |
| GET | `/productos/{producto_id}` | Consultar por ID |
| PUT | `/productos/{producto_id}` | Reemplazar todos los datos |
| DELETE | `/productos/{producto_id}` | Eliminar (204) |
| PUT | `/productos/{producto_id}/desactivar` | Baja lógica conservada del TP 4 |
| GET | `/productos/{producto_id}/stock` | Consultar estado de stock conservado del TP 4 |

Los IDs inválidos o inexistentes devuelven 422 o 404 según corresponda. Nombre vacío, categoría con formato incorrecto, precio negativo y stock negativo se rechazan con 422. El precio cero es válido según la regla explícita de la consigna. Los nombres duplicados, ignorando mayúsculas y espacios exteriores, devuelven 409.

## Pruebas

- `tests/productos.http`: requests para REST Client; ejecutar con el servidor iniciado. Las pruebas de creación pueden repetirse con nombres nuevos o luego de limpiar los registros.
- `tests/TP5-Productos.postman_collection.json`: colección importable en Postman; guarda el ID creado para ejecutar las requests siguientes.

Las operaciones de escritura se confirman en PostgreSQL mediante `Session.commit()` y la respuesta se refresca desde la base.
