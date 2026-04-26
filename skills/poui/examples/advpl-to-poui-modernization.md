# Exemplo: modernização de tela ADVPL para PO UI

## Cenário

Uma rotina ADVPL legada possui uma tela pesada, com muitos campos, pouca orientação visual e baixa rastreabilidade.

## Objetivo

Transformar a experiência em uma tela web mais clara, mantendo regras de negócio no backend e usando PO UI para apresentação e operação.

## Estratégia

### 1. Separar responsabilidades

- Backend: regra de negócio, validação, permissões, persistência e auditoria.
- Frontend PO UI: consulta, entrada de dados, feedback visual e operação.

### 2. Redesenhar o fluxo

Antes:

```text
Tela única com todos os campos e ações.
```

Depois:

```text
Consulta -> Detalhe -> Ação -> Confirmação -> Log
```

### 3. Componentizar

- Tela de listagem.
- Filtros.
- Formulário de detalhe.
- Modal de confirmação.
- Histórico de eventos.

### 4. Evitar migração cega

Não copie a tela antiga campo a campo.

Reclassifique os dados:

- dados de decisão;
- dados complementares;
- dados técnicos;
- dados de auditoria.

## Resultado esperado

Uma interface mais simples para o usuário, com backend preservando regras críticas e com menor custo de manutenção para o time técnico.
