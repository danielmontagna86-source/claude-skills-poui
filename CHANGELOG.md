# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

## [1.1.1] - 2026-10-18

### Fixed

- `po-table-api.md`: lista completa de tipos de coluna validada na documentação oficial (`dateTime`, `time`, `link`, `icon`, `detail`, `subtitle`, `cellTemplate`, `columnTemplate`); outputs `p-all-selected`, `p-all-unselected`, `p-expanded`, `p-collapsed`; lista dos métodos públicos documentados do `PoTableComponent`; aviso de que ícones e cores dependem do `@po-ui/style` instalado.
- Exemplo Angular: coluna de data com hora passa a `dateTime`; componente convertido para standalone com `PoModule`.

## [1.1.0] - 2026-07-04

### Added

- README com status do projeto, escopo de uso e validação de referência.
- Aviso de projeto comunitário e independente.
- Seção de versão de referência e validação do `po-table`.
- Checklist de publicação para GitHub, topics e release.

### Changed

- Manifestos do Claude Code alinhados para `1.1.0`.
- README reforçado para uso público e divulgação técnica.

### Notes

- O projeto está pronto para uso como skill de contexto para Claude Code.
- O exemplo Angular continua sendo uma demo mínima, não uma aplicação completa.
- Antes de usar código gerado em produção, valide contra a versão instalada de `@po-ui/ng-components`.

## [1.0.0] - 2026-07-04

### Added

- Skill base `poui-protheus`.
- Referência local para `po-table`.
- Exemplo Angular mínimo com `po-table`.
- Prompts para análise e geração de telas PO UI.
- Guia de contribuição.
- Roadmap inicial.
- Manifestos para Claude Code plugin/marketplace.
