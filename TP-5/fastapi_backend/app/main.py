from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.database import crear_tablas
from app.modules.producto.routers import router as producto_router


@asynccontextmanager
async def lifespan(_app: FastAPI):
    crear_tablas()
    yield


app = FastAPI(
    title="Gestor de Productos",
    description="API del TP Integrador de Programación IV — Unidad 5.",
    version="1.0.0",
    lifespan=lifespan,
)
app.include_router(producto_router)
