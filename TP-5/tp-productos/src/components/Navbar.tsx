export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Nexo, inicio">
          <span className="grid size-10 place-items-center rounded-xl bg-indigo-600 text-lg font-black text-white">N</span>
          <span className="text-lg font-bold tracking-tight text-slate-900">nexo<span className="text-indigo-600">.</span></span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
          <a className="transition hover:text-indigo-600" href="#productos">Productos</a>
          <a className="transition hover:text-indigo-600" href="#nosotros">Nosotros</a>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">Catálogo</span>
      </div>
    </nav>
  )
}
