# Arquitetura

## Stack

- **HTML, CSS e JavaScript puros**, sem framework. O Vite só serve o projeto no desenvolvimento e gera o `dist/` no build.
- **Fonte Outfit** pelo Google Fonts (link no `index.html`).
- **Firebase Hosting**, projeto `pokemon-matchups`.

## Pastas

```
index.html                 estrutura da página e textos fixos
src/
  data.js                  TYPES (os 18 tipos), typeRelations (fraquezas, resistências e imunidades de cada tipo) e typeIcons (SVG de cada tipo)
  main.js                  estado da seleção, cálculo da defesa combinada e montagem das seções
  style.css                tokens de cor (:root), cores dos tipos e componentes
public/                    arquivos copiados como estão para o dist/ (favicon, imagem de compartilhamento)
.github/workflows/         deploy na main e prévia em pull request
firebase.json, .firebaserc configuração do Hosting (publica o dist/)
```

## De onde vêm os dados

A tabela de tipos é fixa em `src/data.js`, escrita do ponto de vista de quem **defende**: para cada tipo, quem causa dano dobrado, quem causa metade e quem não causa dano.
O lado do ataque (`getOffensiveEffectiveness` em `main.js`) é derivado dessa mesma tabela, então só existe uma fonte de verdade.

## Cálculo da defesa combinada

Cada atacante começa em 1×. Para cada tipo do Pokémon, fraqueza multiplica por 2, resistência por 0,5 e imunidade por 0.
O resultado cai em uma das faixas 0×, 0,25×, 0,5×, 2× ou 4×; 1× não é mostrado.

## Deploy

- **Produção:** push na `main` roda `.github/workflows/firebase-hosting-merge.yml` (build e publicação no canal `live`).
- **Prévia:** cada pull request roda `firebase-hosting-pull-request.yml` e comenta um link temporário no PR.
- Os dois dependem do segredo `FIREBASE_SERVICE_ACCOUNT_POKEMON_MATCHUPS` no GitHub (ver README).
- Publicar à mão, se precisar: `npm run build && npx firebase-tools deploy --only hosting`.

## Histórico

Até 24/10/2026 o projeto era um único `index.html` com CSS e JS embutidos, publicado direto da pasta do Antigravity.
O primeiro commit guarda esse arquivo exatamente como estava no ar; o segundo separa em arquivos sem mudar o comportamento.
