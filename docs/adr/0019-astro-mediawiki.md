# ADR-0019 — Frontend do Acervo

O frontend público do Acervo será Astro.

MediaWiki será o backend especializado da base de conhecimento.

Arquitetura:

Astro
↓
Acervo API/Adapter
↓
MediaWiki

O visitante não precisa conhecer a existência do MediaWiki.