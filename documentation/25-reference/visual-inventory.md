# Inventário Visual — DRESBACH

> **Documento de referência para catalogação completa de todas as imagens, screenshots e ativos visuais do projeto.**
> Cada entrada deve conter identificação única, aplicação, página, rota, componentes, funcionalidades, estado e fonte.

---

## Tabela de Inventário Visual

| ID | Arquivo | Aplicação | Página | Rota | Componentes | Funcionalidades | Estado | Fonte |
|----|---------|-----------|--------|------|-------------|-----------------|--------|-------|

---

## 1. Kit de Identidade Visual — Instituto Brasileiro Dresbach

**Localização:** `/front-end/site/public/Kit_Identidade_Instituto_Dresbach/`

| ID | Arquivo | Aplicação | Página | Rota | Componentes | Funcionalidades | Estado | Fonte |
|----|---------|-----------|--------|------|-------------|-----------------|--------|-------|
| VIS-001 | `brasao_institucional_transparente.png` | Site | Identidade visual | N/A | Brasão | Identidade institucional, documentos oficiais | ATIVO | Kit oficial |
| VIS-002 | `brasao_institucional.svg` | Site | Identidade visual | N/A | Brasão (vetor) | Aplicações web escaláveis | ATIVO | Kit oficial |
| VIS-003 | `logo_horizontal_transparente.png` | Site | Cabeçalho / Header | N/A | Logo horizontal | Cabeçalho do site, documentos | ATIVO | Kit oficial |
| VIS-004 | `logo_compacta.png` | Site | Áreas reduzidas | N/A | Logo compacta | Favicon, espaços pequenos | ATIVO | Kit oficial |
| VIS-005 | `favicon.ico` | Site | Navegador | N/A | Favicon | Identificação no navegador | ATIVO | Kit oficial |
| VIS-006 | `icon-16x16.png` | Site | PWA / Navegador | N/A | Ícone PWA | Ícone 16x16 | ATIVO | Kit oficial |
| VIS-007 | `icon-32x32.png` | Site | PWA / Navegador | N/A | Ícone PWA | Ícone 32x32 | ATIVO | Kit oficial |
| VIS-008 | `icon-48x48.png` | Site | PWA / Navegador | N/A | Ícone PWA | Ícone 48x48 | ATIVO | Kit oficial |
| VIS-009 | `icon-96x96.png` | Site | PWA / Navegador | N/A | Ícone PWA | Ícone 96x96 | ATIVO | Kit oficial |
| VIS-010 | `icon-180x180.png` | Site | PWA / iOS | N/A | Ícone PWA | Ícone 180x180 (Apple touch) | ATIVO | Kit oficial |
| VIS-011 | `icon-192x192.png` | Site | PWA / Android | N/A | Ícone PWA | Ícone 192x192 | ATIVO | Kit oficial |
| VIS-012 | `icon-256x256.png` | Site | PWA | N/A | Ícone PWA | Ícone 256x256 | ATIVO | Kit oficial |
| VIS-013 | `icon-512x512.png` | Site | PWA | N/A | Ícone PWA | Ícone 512x512 | ATIVO | Kit oficial |
| VIS-014 | `open-graph-1200x630.png` | Site | Compartilhamento social | N/A | Open Graph | Preview em redes sociais | ATIVO | Kit oficial |
| VIS-015 | `capa-institucional-1640x856.png` | Site | Redes sociais | N/A | Capa institucional | Capa LinkedIn/Facebook | ATIVO | Kit oficial |
| VIS-016 | `site.webmanifest` | Site | PWA Config | N/A | Manifest | Configuração Progressive Web App | ATIVO | Kit oficial |
| VIS-017 | `robots.txt` | Site | SEO | N/A | Robots | Controle de indexação | ATIVO | Kit oficial |
| VIS-018 | `sitemap.xml` | Site | SEO | N/A | Sitemap | Mapa do site para buscadores | ATIVO | Kit oficial |
| VIS-019 | `brasao_monocromatico_preto.png` | Site | Impressão / Fundos claros | N/A | Brasão monocromático | Versão preto para fundos claros | REFERENCIADO* | Manual menciona mas arquivo não encontrado |
| VIS-020 | `brasao_monocromatico_branco.png` | Site | Impressão / Fundos escuros | N/A | Brasão monocromático | Versão branco para fundos escuros | REFERENCIADO* | Manual menciona mas arquivo não encontrado |

> * **STATUS: REFERENCIADO** — Arquivos mencionados no `MANUAL_IDENTIDADE_VISUAL.md` mas não encontrados no diretório. Necessário verificar se devem ser criados ou se a referência está desatualizada.

---

## 2. Imagens Institucionais — Diretório `/imagens/`

**Localização:** `/front-end/site/public/imagens/`

| ID | Arquivo | Aplicação | Página | Rota | Componentes | Funcionalidades | Estado | Fonte |
|----|---------|-----------|--------|------|-------------|-----------------|--------|-------|
| VIS-021 | `Logo_Instituto_Dresbach_Sem_Fundo.png` | Site | Identidade / Hero | `/` (home) | Logo principal | Logo sem fundo para uso geral | ATIVO | Assets institucionais |
| VIS-022 | `brasaooficial.webp` | Site | Identidade / Hero | `/` (home) | Brasão oficial | Brasão em formato WebP otimizado | ATIVO | Assets institucionais |
| VIS-023 | `capa face.png` | Site | Capa / Hero | `/` (home) | Imagem de capa | Imagem principal de apresentação | ATIVO | Assets institucionais |
| VIS-024 | `genealogia correta famila.png` | Site | Genealogia pública | `/genealogia` (proposta) | Ilustração genealógica | Exemplo visual de árvore familiar | ATIVO | Assets institucionais |
| VIS-025 | `file.svg` | Site | Ícone genérico | N/A | Ícone arquivo | Ícone SVG para documentos | ATIVO | Assets institucionais |
| VIS-026 | `globe.svg` | Site | Ícone global | N/A | Ícone globo | Ícone SVG para navegação/global | ATIVO | Assets institucionais |

---

## 3. Referências Externas (Não fazem parte do código-base)

**Localização:** `/apk MXQ GUARDIAN-DIAGNOSTIC v1.0/` — **PROJETO DIFERENTE, NÃO PARTE DO DRESBACH**

| ID | Arquivo | Aplicação | Observação |
|----|---------|-----------|------------|
| VIS-EXT-001 | `apk MXQ GUARDIAN-DIAGNOSTIC v1.0/portal/frontend/public/logo.png` | MXQ Guardian | Projeto separado, não pertence ao DRESBACH |
| VIS-EXT-002 | `apk MXQ GUARDIAN-DIAGNOSTIC v1.0/portal/frontend/node_modules/.../*.png` | Node modules | Dependências de terceiros, não inventariar |

> **IMPORTANTE:** O diretório `apk MXQ GUARDIAN-DIAGNOSTIC v1.0/` é um projeto Android/Next.js completamente separado (portal de diagnóstico MXQ Guardian). Não deve ser considerado parte do DRESBACH. Recomenda-se mover para fora do workspace ou documentar claramente como externo.

---

## 4. Screenshots de Interface (Ainda não existentes)

> **STATUS: NÃO EXISTENTE** — Não foram encontrados screenshots de interfaces funcionais (páginas, componentes, fluxos) no projeto. Conforme a regra de auditoria, quando as aplicações forem implementadas, cada screenshot deve ser catalogada aqui com:
> - ID sequencial (VIS-UI-XXX)
> - Aplicação (site/plataforma/administrativo)
> - Página/Componente
> - Rota
> - Componentes visíveis
> - Funcionalidades demonstradas
> - Estado (implementado/mock/proposta)
> - Fonte (arquivo de imagem)

---

## 5. Paleta de Cores Institucional (Referência Visual)

| Cor | Hex | Uso | Fonte |
|-----|-----|-----|-------|
| Preto | `#0B0B0B` | Texto principal, fundos escuros | Manual Identidade |
| Dourado | `#D4A63E` | Destaques, acentos, brasão | Manual Identidade |
| Vermelho | `#C9151E` | Alertas, brasão, destaque institucional | Manual Identidade |
| Branco | `#FFFFFF` | Fundos, textos sobre escuro | Manual Identidade |
| Azul do escudo | `#1769D1` | Brasão, links, elementos interativos | Manual Identidade |

---

## Resumo Quantitativo

| Categoria | Total | Ativos | Referenciados (ausentes) | Externos |
|-----------|-------|--------|--------------------------|----------|
| Kit Identidade | 20 | 18 | 2 | 0 |
| Imagens Institucionais | 6 | 6 | 0 | 0 |
| Projeto Externo (MXQ) | 2+ | 0 | 0 | 2+ |
| **Total DRESBACH** | **26** | **24** | **2** | **0** |

---

## Próximos Passos

1. **Verificar ausência** dos arquivos `brasao_monocromatico_preto.png` e `brasao_monocromatico_branco.png` — criar ou remover referência do manual.
2. **Mover ou isolar** o diretório `apk MXQ GUARDIAN-DIAGNOSTIC v1.0/` para fora do workspace DRESBACH.
3. **Criar screenshots** das interfaces conforme forem implementadas (site, plataforma, administrativo).
4. **Atualizar este inventário** a cada nova imagem adicionada ao projeto.

---

*Documento gerado em: 2026-10-01*
*Versão: 1.0.0*
*Responsável: Auditoria de Engenharia DRESBACH*