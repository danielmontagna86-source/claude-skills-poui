# Exemplo: análise de tela corporativa

## Entrada do usuário

```text
Preciso criar uma tela para acompanhar títulos a pagar que estão aguardando envio bancário.
O usuário precisa filtrar por filial, fornecedor, vencimento, status e borderô.
Também precisa ver erros de integração com a VAN.
```

## Resposta esperada do agente

### 1. Entendimento do processo

A tela não deve ser apenas uma consulta de títulos. Ela deve funcionar como uma tela de monitoramento operacional do fluxo financeiro.

O operador precisa identificar rapidamente:

- quais títulos estão elegíveis para envio;
- quais estão bloqueados por regra;
- quais falharam na integração;
- quais já foram enviados;
- quais exigem ação manual.

### 2. Proposta de tela

Criar uma tela de monitoramento com:

- cards de resumo por status;
- filtros principais no topo;
- tabela paginada com os títulos;
- tags visuais de status;
- ação de detalhar inconsistência;
- histórico do processamento.

### 3. Componentes PO UI recomendados

- Tabela para listagem principal.
- Filtros para filial, fornecedor, vencimento, status e borderô.
- Tags para status financeiro/integrador.
- Modal ou drawer para detalhe do erro.
- Botões de ação para reprocessar ou visualizar histórico.

### 4. Cuidados técnicos

- A consulta deve ser paginada no backend.
- Não carregar todo o SE2 de uma vez.
- Status deve vir de uma tabela de monitoramento ou visão consolidada.
- Erros técnicos devem ser traduzidos para mensagens operacionais.
- Toda ação manual deve gerar log.

### 5. Ganho para o analista ADVPL

O analista deixa de construir uma tela monolítica e passa a desenhar um fluxo rastreável, modular e mais fácil de manter.

O ganho não está só no visual. Está na padronização, na redução de retrabalho e na clareza para manutenção futura.
