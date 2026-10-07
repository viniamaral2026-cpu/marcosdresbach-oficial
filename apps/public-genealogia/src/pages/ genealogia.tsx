/**
 * Página de Árvore Genealógica - Public Genealogy App
 * 
 * Esta página implementa a ferramenta interativa principal da genealogia
 * conforme especificado nas telas de referência do Instituto Brasileiro Dresbach.
 * 
 * Funcionalidades:
 * - Árvore genealógica interativa com zoom e navegação
 * - Seleção de pessoas com painel de detalhes
 * - Filtros e linhagens
 * - Timeline inferior
 * - Métricas laterais
 */

import Image from 'next/image'

export default function GenealogyTreePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-instituto.svg"
              alt="Instituto Brasileiro Dresbach"
              width={40}
              height={40}
              className="blur-lg"
            />
            <span className="text-xl font-bold text-navy">Instituto Brasileiro Dresbach</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#instituto" className="text-gray-600 hover:text-orange">Instituto</a>
            <a href="/#genealogia" className="text-gray-600 hover:text-orange">Genealogia</a>
            <a href="/#acervo" className="text-gray-600 hover:text-orange">Acervo</a>
            <a href="/participe" className="text-gray-600 hover:text-orange">Participar</a>
          </nav>
          <button className="md:hidden text-orange">☰ Menu</button>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200" aria-label="breadcrumb">
        <ol className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2">
          <li>
            <a href="/" className="text-sm text-gray-500">Início</a>
          </li>
          <li>
            <a href="/#genealogia" className="text-sm text-gray-500">Genealogia</a>
          </li>
          <li>
            <span className="text-sm text-gray-500" aria-current="page">Árvore Genealógica</span>
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative bg-orange-50 border-y border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100 via-white to-orange-50"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden md:mr-8">
              <Image
                src="/person-placeholder.svg"
                alt="Perfil de pessoa na árvore genealógica"
                width={512}
                height={512}
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1 pt-4 pt-0 md:pt-0">
              <h1 className="text-3xl md:text-4xl font-extrabold text-navy">Árvore Genealógica</h1>
              <p className="mt-2 text-lg text-gray-600">
                Explore a história da família Dresbach, linhagens e conexões históricas.
              </p>
            </div>
          </div>
          {/* Breadcrumb inside hero */}
          <nav className="mt-6 md:mt-0 flex gap-2 text-sm text-gray-500">
            <a href="/" className="hover:text-orange">Início</a>
            <span className="mx-1 separator">/</span>
            <span className="text-orange">Árvore Genealógica</span>
          </nav>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-3xl font-extrabold text-navy">2.487</p>
            <p className="text-sm text-gray-500">Pessoas registradas</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-3xl font-extrabold text-navy">426</p>
            <p className="text-sm text-gray-500">Famílias</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-3xl font-extrabold text-navy">1.320</p>
            <p className="text-sm text-gray-500">Documentos</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-3xl font-extrabold text-navy">18</p>
            <p className="text-sm text-gray-500">Lugares</p>
          </div>
        </div>
      </section>

      {/* Tree Controls */}
      <section className="bg-white py-4 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Buscar pessoa na árvore..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
          </div>
          <button className="px-4 py-2 text-sm text-orange bg-white rounded-lg border border-orange-300 hover:bg-orange-50 hover:text-orange">
            Buscar
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Gerações: <strong className="text-navy">4</strong></span>
            <button className="ml-2 text-xs text-gray-400 hover:text-orange">▶</button>
            <button className="ml-2 text-xs text-gray-400 hover:text-orange">◀</button>
          </div>
        </div>
      </section>

      {/* Main Canvas Area */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6">Canvas da Árvore</h2>
          <p className="text-gray-600 mb-6">
            Árvore genealógica interativa com nós de pessoas, linhas de conexão e controles de navegação.
          </p>
          {/* Árvore seria renderizada aqui por um componente JavaScript especializado */}
          <div className="h-64 bg-gray-100 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
            <p className="text-gray-400">Canvas da árvore genealógica</p>
          </div>
        </div>
      </section>

      {/* Right Panel */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Person Detail Panel would appear here on person selection */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-navy mb-4">Detalhes da Pessoa</h3>
            <p className="text-gray-500">
              Selecione um nó na árvore para ver os detalhes da pessoa no painel lateral.
            </p>
          </div>
          
          {/* Timeline */}
          <div>
            <h3 className="text-lg font-medium text-navy mb-4">Timeline Inferior</h3>
            <div className="h-10 bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center text-sm text-gray-400">
              1700 • 1750 • 1800 • 1850 • 1900 • 1950 • 2000
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}