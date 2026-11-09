import type { Producto } from '../types/producto'

interface ProductoCardProps {
  producto: Producto
  destacado?: boolean
}

const ilustraciones: Record<number, { icono: string; fondo: string; etiqueta: string }> = {
  1: { icono: '⌨', fondo: 'from-violet-100 to-indigo-50', etiqueta: 'Tecnología' },
  2: { icono: '◉', fondo: 'from-sky-100 to-cyan-50', etiqueta: 'Tecnología' },
  3: { icono: '◌', fondo: 'from-amber-100 to-orange-50', etiqueta: 'Accesorios' },
}

export default function ProductoCard({ producto, destacado = false }: ProductoCardProps) {
  const arte = ilustraciones[producto.id] ?? ilustraciones[1]

  return (
    <article className={`group overflow-hidden rounded-2xl border bg-white transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 ${destacado ? 'border-indigo-200 shadow-md shadow-indigo-100/60' : 'border-slate-200 shadow-sm'}`}>
      <div className={`relative grid h-48 place-items-center bg-gradient-to-br ${arte.fondo}`}>
        <span className="text-7xl text-slate-800/80 transition duration-200 group-hover:scale-110" aria-hidden="true">{arte.icono}</span>
        {destacado && <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-700">Destacado</span>}
        <span className="absolute bottom-4 right-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-600">{arte.etiqueta}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{producto.nombre}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{producto.descripcion}</p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <p className="text-xl font-bold tracking-tight text-slate-900">{producto.precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 })}</p>
          <button type="button" aria-label={`Ver ${producto.nombre}`} className="grid size-10 place-items-center rounded-xl bg-slate-900 text-lg text-white transition hover:bg-indigo-600">↗</button>
        </div>
      </div>
    </article>
  )
}
