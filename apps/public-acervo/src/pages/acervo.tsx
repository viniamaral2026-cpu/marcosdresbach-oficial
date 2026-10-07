/**
 * Acervo Público - Página Principal
 * Catálogo público de documentos e materiais históricos.
 */

export default function AcervoPublicoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-instituto.svg" alt="Instituto" width={40} height={40} />
            <span className="text-xl font-bold text-navy">Acervo</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-600 hover:text-orange">Início</a>
            <a href="/#acervo" className="text-gray-600 hover:text-orange">Acervo</a>
          </nav>
          <button className="md:hidden text-orange">☰</button>
        </div>
      </header>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-navy">Acervo Público</h1>
          <p className="mt-2 text-lg text-gray-600">
            Explore documentos, fotografias, manuscritos, mapas e outros materiais históricos.
          </p>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-orange">Documentos</h3>
              <p className="text-sm text-gray-500">Registros históricos, certificados, cartas</p>
            </div>
            <div className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-orange">Fotografias</h3>
              <p className="text-sm text-gray-500">Fotos de família, eventos, locais históricos</p>
            </div>
            <div className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-orange">Mapas</h3>
              <p className="text-sm text-gray-500">Mapas regionais, mapas de imigração, plantas arquitetônicas</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}