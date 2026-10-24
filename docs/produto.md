# Produto

## O que é

Uma página que responde "contra o que esse Pokémon é fraco e o que ele aguenta?" a partir de um ou dois tipos.
O diferencial em relação à tabela 18×18 clássica é já entregar a conta da combinação de dois tipos, que é onde as pessoas erram (×4 e ×0,25).

## Quem usa

Ainda não definido (ver perguntas em aberto em `docs/pendencias.md`). Hipóteses:

- **Jogador em batalha:** consulta rápida, no celular, com uma mão.
- **Jogador montando time:** compara tipos com calma, no computador.

## Decisões já tomadas

| Tema | Decisão |
|---|---|
| Entrada | Por tipo: tipo primário obrigatório (começa em Normal) e secundário opcional ("Nenhum"). Escolher no secundário o mesmo tipo do primário volta para "Nenhum". |
| Defesa | Combinada: multiplica os efeitos dos dois tipos e agrupa os atacantes em 0×, 0,25×, 0,5×, 2× e 4×. Neutros (1×) não aparecem. |
| Ataque | Mostrado por tipo, nunca combinado, porque o dano de um golpe depende do tipo do golpe, não do Pokémon. |
| Tabela de tipos | Geração 6 em diante, 18 tipos. Não considera habilidades (Levitate, Flash Fire etc.) nem itens. |
| Tema | Escuro, fixo. |
| Plataforma | Web, página única. |

## Tom de voz

- Português do Brasil, direto, segunda pessoa ("seu Pokémon").
- Termos do jogo como o jogador fala: "fraqueza", "resiste", "imunidade", "super efetivo".
