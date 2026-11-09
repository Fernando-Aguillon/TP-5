from typing import Optional

from sqlmodel import Field, SQLModel


class Producto(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    nombre: str = Field(index=True)
    descripcion: str = Field(default="")
    categoria: str
    precio: float
    stock: int
    stock_minimo: int
    activo: bool = True
