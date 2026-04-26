# Contributing

Obrigado por considerar contribuir com o projeto `claude-skills-poui`.

O objetivo do projeto é criar skills e referências para reduzir código inventado por IA ao trabalhar com PO UI, Angular e Protheus/ADVPL.

## Como contribuir

Você pode contribuir com:

- novas referências de componentes PO UI;
- correções de inputs, outputs e tipos;
- exemplos Angular funcionais;
- casos de uso em Protheus;
- melhorias nas instruções da skill;
- testes com Claude Code.

## Padrão para novo componente

Para adicionar um novo componente, use a estrutura:

```text
skills/poui/references/<component>-api.md
skills/poui/examples/<component>-use-cases.md
examples/angular-<component>-demo/
```

Exemplo:

```text
skills/poui/references/po-modal-api.md
skills/poui/examples/po-modal-use-cases.md
examples/angular-po-modal-demo/
```

## Checklist técnico

Antes de abrir uma contribuição:

- [ ] Validou a documentação oficial do PO UI.
- [ ] Indicou a versão ou a fonte consultada.
- [ ] Não incluiu propriedade inventada.
- [ ] Não incluiu evento sem validação.
- [ ] Não chamou método de `ViewChild` sem documentação.
- [ ] Adicionou exemplo prático.
- [ ] Considerou paginação, performance e backend quando aplicável.
- [ ] Evitou exemplo genérico sem contexto real.

## Padrão de escrita

Use linguagem direta e prática.

Prefira:

```text
Use este input quando...
Evite este padrão porque...
Valide no backend porque...
```

Evite:

```text
Este componente é muito poderoso...
Basta usar...
A IA sempre fará...
```

## Contexto Protheus

Quando o exemplo envolver Protheus, considere:

- multiempresa;
- multifilial;
- permissões;
- auditoria;
- performance em tabelas grandes;
- integrações REST;
- regras legadas ADVPL.

## Segurança

Não adicione:

- credenciais;
- URLs internas;
- tokens;
- dados reais de clientes;
- payloads bancários reais;
- informações sensíveis de ambiente.

## Roadmap

Consulte `docs/roadmap.md` para ver os próximos componentes previstos.
