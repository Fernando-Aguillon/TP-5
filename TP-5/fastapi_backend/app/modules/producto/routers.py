from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, Path, Query, Response, status
from sqlmodel import Session

from app.database import get_session
from app.modules.producto import schemas, services

router = APIRouter(prefix="/productos", tags=["Productos"])
SessionDep = Annotated[Session, Depends(get_session)]


@router.post("/", response_model=schemas.ProductoRead, status_code=status.HTTP_201_CREATED)
def alta_producto(producto: schemas.ProductoCreate, session: SessionDep):
    return services.crear(session, producto)


@router.get("/", response_model=list[schemas.ProductoRead])
def listar_productos(
    session: SessionDep,
    skip: int = Query(default=0, ge=0),
    limit: int = Query(default=10, ge=1, le=50),
):
    return services.obtener_todos(session, skip, limit)


@router.get("/{producto_id}", response_model=schemas.ProductoRead)
def detalle_producto(
    session: SessionDep,
    producto_id: int = Path(gt=0),
):
    producto = services.obtener_por_id(session, producto_id)
    if producto is None:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return producto


@router.put("/{producto_id}", response_model=schemas.ProductoRead)
def actualizar_producto(
    producto: schemas.ProductoCreate,
    producto_id: int = Path(gt=0),
    session: Session = Depends(get_session),
):
    actualizado = services.actualizar_total(session, producto_id, producto)
    if actualizado is None:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return actualizado


@router.put("/{producto_id}/desactivar", response_model=schemas.ProductoRead)
def desactivar_producto(
    producto_id: int = Path(gt=0), session: Session = Depends(get_session)
):
    producto = services.desactivar(session, producto_id)
    if producto is None:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return producto


@router.delete("/{producto_id}", status_code=status.HTTP_204_NO_CONTENT)
def eliminar_producto(
    producto_id: int = Path(gt=0), session: Session = Depends(get_session)
):
    if not services.eliminar(session, producto_id):
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.get("/{producto_id}/stock", response_model=schemas.ProductoStockResponse)
def consultar_stock(
    producto_id: int = Path(gt=0), session: Session = Depends(get_session)
):
    estado = services.obtener_estado_stock(session, producto_id)
    if estado is None:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return estado
