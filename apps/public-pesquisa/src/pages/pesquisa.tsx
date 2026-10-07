/**
 * Pesquisa - Public Research App
 * 
 * Página principal de pesquisa do Instituto Brasileiro Dresbach.
 * Permite buscar por projetos, pesquisadores, artigos, estudos, fontes.
 * 
 * Conecta-se à API central para busca e filtros.
 */

export default function PesquisaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
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
            <span className="text-xl font-bold text-navy">Pesquisa</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-600 hover:text-orange">Início</a>
            <a href="/#pesquisa" className="text-gray-600 hover:text-orange">Pesquisa</a>
            <a href="/#instituto" className="text-gray-600 hover:text-orange">Instituto</a>
          </nav>
          <button className="md:hidden text-orange">☰</button>
        </div>
      </header>

      {/* Hero / Search Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-extrabold text-navy">Pesquisa e Estudos</h1>
            <p className="mt-2 text-lg text-gray-600">
              Explore projetos, pesquisadores, artigos e fontes do Instituto Brasileiro Dresbach.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 grid max-w-2xl">
            <div className="rounded-lg border border-gray-300 p-4">
              <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.2-5.2a1.93 1.93 0 01-2.83 0L10 14.2m8.6 8.6l5.2 5.2a1.93 1.93 0 010 2.83l-5.2-5.2a1.93 1.93 0 01-2.83 0L3.427 20.9"></path>
              </svg>
              <input
                type="text"
                placeholder="Pesquisar projetos, artigos, pesquisadores, fontes..."
                className="w-full bg-white py-2 px-3 rounded-lg focus:ring-2 focus:ring-orange-500 focus-visible:outline-none disabled:bg-gray-100 disabled:cursor-not-placeholder"
                aria-label="Pesquisar no acervo e pesquisas"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 grid grid-cols-3 gap-2">
            <button
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:text-orange hover:bg-orange-50 transition-colors"
              aria-pressed="true"
              data-tab="all"
            >
              Todos
            </button>
            <button
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:text-orange hover:bg-orange-50 transition-colors"
              aria-pressed="false"
              data-tab="projetos"
            >
              Projetos
            </button>
            <button
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:text-orange hover:bg-orange-50 transition-colors"
              aria-pressed="false"
              data-tab="pesquisadores"
            >
              Pesquisadores
            </button>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-500 mb-4">Resultados disponíveis quando a API estiver conectada.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cards would be rendered here by the API */}
            <div className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-medium text-navy mb-2">Projeto de Pesquisa</h3>
              <p className="text-sm text-gray-500">Título do projeto...</p>
            </div>
            <div className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-medium text-navy mb-2">Artigo Científico</h3>
              <p className="text-sm text-gray-500">Título do artigo...</p>
            </div>
            <div className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <h3 className="text-lg font-medium text-navy mb-2">Pesquisador</h3>
              <p className="text-sm text-gray-500">Nome do pesquisador...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy mb-6">Relacionado</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-orange">Projetos em Destaque</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Projeto Wittgenstein e Memória</li>
                <li>Genealogia Dresbach no Brasil</li>
                <li>Pesquisa Histórica e Documentos</li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange">Fontes Recentes</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Cartas familiares Dresbach</li>
                <li>Registros civis XIX secolo</li>
                <li>Mapas de imigração</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}