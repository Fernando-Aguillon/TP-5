export default function ProductoForm() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Sumá algo nuevo</p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900">Agregar producto</h2>
        <p className="mt-1 text-sm text-slate-500">Completá los datos para publicar un producto.</p>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-slate-700">Nombre</label>
          <input id="nombre" type="text" placeholder="Ej. Auriculares inalámbricos" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50" />
        </div>
        <div>
          <label htmlFor="descripcion" className="mb-1.5 block text-sm font-medium text-slate-700">Descripción</label>
          <textarea id="descripcion" rows={3} placeholder="Contá brevemente qué lo hace especial" className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50" />
        </div>
        <div>
          <label htmlFor="precio" className="mb-1.5 block text-sm font-medium text-slate-700">Precio</label>
          <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50">
            <span className="text-sm text-slate-400">$</span>
            <input id="precio" type="number" min="0" step="1" placeholder="0" className="w-full border-0 bg-transparent px-2 py-2.5 text-sm outline-none" />
          </div>
        </div>
        <button type="button" className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700">Agregar producto <span aria-hidden="true">→</span></button>
      </form>
      <p className="mt-4 text-center text-xs text-slate-400">Formulario de muestra · sin funcionalidad</p>
    </section>
  )
}
