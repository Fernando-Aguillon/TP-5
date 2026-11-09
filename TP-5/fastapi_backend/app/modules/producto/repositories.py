from typing import Optional

from sqlalchemy import func
from sqlmodel import Session, select

from app.modules.producto.models import Producto


def crear(session: Session, producto: Producto) -> Producto:
    session.add(producto)
    session.commit()
    session.refresh(producto)
    return producto


def obtener_todos(session: Session, skip: int, limit: int) -> list[Producto]:
    statement = select(Producto).offset(skip).limit(limit).order_by(Producto.id)
    return list(session.exec(statement).all())


def obtener_por_id(session: Session, producto_id: int) -> Optional[Producto]:
    return session.get(Producto, producto_id)


def obtener_por_nombre(session: Session, nombre: str) -> Optional[Producto]:
    statement = select(Producto).where(
        func.lower(func.trim(Producto.nombre)) == nombre.strip().lower()
    )
    return session.exec(statement).first()


def actualizar(session: Session, producto: Producto) -> Producto:
    session.add(producto)
    session.commit()
    session.refresh(producto)
    return producto


def eliminar(session: Session, producto: Producto) -> None:
    session.delete(producto)
    session.commit()
