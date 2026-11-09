from typing import Optional

from fastapi import HTTPException, status
from sqlmodel import Session

from app.modules.producto import repositories
from app.modules.producto.models import Producto
from app.modules.producto.schemas import ProductoCreate


def crear(session: Session, data: ProductoCreate) -> Producto:
    nombre = data.nombre.strip()
    if repositories.obtener_por_nombre(session, nombre):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Ya existe un producto con ese nombre",
        )
    producto = Producto(**(data.model_dump() | {"nombre": nombre}))
    return repositories.crear(session, producto)


def obtener_todos(session: Session, skip: int, limit: int) -> list[Producto]:
    return repositories.obtener_todos(session, skip, limit)


def obtener_por_id(session: Session, producto_id: int) -> Optional[Producto]:
    return repositories.obtener_por_id(session, producto_id)


def actualizar_total(
    session: Session, producto_id: int, data: ProductoCreate
) -> Optional[Producto]:
    producto = repositories.obtener_por_id(session, producto_id)
    if producto is None:
        return None

    nombre = data.nombre.strip()
    existente = repositories.obtener_por_nombre(session, nombre)
    if existente is not None and existente.id != producto_id:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Ya existe un producto con ese nombre",
        )

    producto.sqlmodel_update(data.model_dump() | {"nombre": nombre})
    return repositories.actualizar(session, producto)


def desactivar(session: Session, producto_id: int) -> Optional[Producto]:
    producto = repositories.obtener_por_id(session, producto_id)
    if producto is None:
        return None
    producto.activo = False
    return repositories.actualizar(session, producto)


def eliminar(session: Session, producto_id: int) -> bool:
    producto = repositories.obtener_por_id(session, producto_id)
    if producto is None:
        return False
    repositories.eliminar(session, producto)
    return True


def obtener_estado_stock(session: Session, producto_id: int) -> Optional[dict]:
    producto = repositories.obtener_por_id(session, producto_id)
    if producto is None:
        return None
    return {
        "stock": producto.stock,
        "bajo_stock_minimo": producto.stock < producto.stock_minimo,
        "activo": producto.activo,
    }
