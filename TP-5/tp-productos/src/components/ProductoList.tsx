import type { Producto } from '../types/producto'
import ProductoCard from './ProductoCard'

interface ProductoListProps {
  productos: Producto[]
}

export default function ProductoList({ productos }: ProductoListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {productos.map((producto, index) => (
        <ProductoCard key={producto.id} producto={producto} destacado={index === 0} />
      ))}
    </div>
  )
}
