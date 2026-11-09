import os
from collections.abc import Generator

from dotenv import load_dotenv
from sqlmodel import Session, SQLModel, create_engine

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise RuntimeError(
        "Falta DATABASE_URL. Copiá .env.example a .env y configurá PostgreSQL."
    )

engine = create_engine(DATABASE_URL, echo=False)


def get_session() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session


def crear_tablas() -> None:
    # Importa el modelo para registrarlo en SQLModel.metadata antes del create_all.
    from app.modules.producto.models import Producto  # noqa: F401

    SQLModel.metadata.create_all(engine)
