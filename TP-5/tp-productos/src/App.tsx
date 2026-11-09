import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductoForm from './components/ProductoForm'
import ProductoList from './components/ProductoList'
import type { Producto } from './types/producto'

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Teclado mecánico Aura',
    descripcion: 'Diseño compacto, teclas suaves e iluminación para acompañar cada jornada.',
    precio: 84900,
  },
  {
    id: 2,
    nombre: 'Monitor Studio 24″',
    descripcion: 'Pantalla Full HD de 24 pulgadas con colores nítidos para trabajar y crear.',
    precio: 289000,
  },
  {
    id: 3,
    nombre: 'Mouse inalámbrico Flow',
    descripcion: 'Forma cómoda, conexión estable y batería de larga duración.',
    precio: 32900,
  },
]

export default function App() {
  return (
    <div id="inicio" className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
        <section className="mb-10 overflow-hidden rounded-3xl bg-slate-900 px-6 py-9 text-white sm:px-10 sm:py-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Objetos que suman</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Encontrá tu próximo favorito.</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">Una selección de tecnología y accesorios pensada para hacer más simple cada día.</p>
            <a href="#productos" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-indigo-100">Explorar productos <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <section id="productos">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">Selección de la semana</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Productos destacados</h2>
              </div>
              <span className="pb-1 text-sm text-slate-500">{productos.length} productos</span>
            </div>
            <ProductoList productos={productos} />
          </section>
          <ProductoForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
