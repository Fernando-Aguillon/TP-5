from typing import Annotated, Optional

from pydantic import BaseModel, Field, StringConstraints

NombreProducto = Annotated[
    str,
    StringConstraints(strip_whitespace=True, min_length=1),
]
CategoriaProducto = Annotated[str, StringConstraints(pattern=r"^[A-Z]{3}-\d{2}$")]


class ProductoBase(BaseModel):
    nombre: NombreProducto = Field(examples=["Silla de Oficina"])
    descripcion: str = ""
    categoria: CategoriaProducto = Field(examples=["MUE-01"])
    precio: float = Field(ge=0, examples=[150.50])
    stock: int = Field(ge=0, examples=[20])
    stock_minimo: int = Field(ge=0, examples=[5])
    activo: bool = True


class ProductoCreate(ProductoBase):
    pass


class ProductoUpdate(BaseModel):
    """Schema para una futura actualización parcial (PATCH)."""

    nombre: Optional[NombreProducto] = None
    categoria: Optional[CategoriaProducto] = None
    precio: Optional[float] = Field(default=None, ge=0)
    stock: Optional[int] = Field(default=None, ge=0)
    stock_minimo: Optional[int] = Field(default=None, ge=0)
    activo: Optional[bool] = None


class ProductoRead(ProductoBase):
    id: int


class ProductoStockResponse(BaseModel):
    stock: int
    bajo_stock_minimo: bool
    activo: bool
