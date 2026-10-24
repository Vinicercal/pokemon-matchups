# Pokémon Matchups

Consulta rápida de fraquezas, resistências e imunidades de um Pokémon a partir dos seus tipos, inclusive na combinação de dois tipos (×4, ×0,25).

**No ar:** https://pokemon-matchups.web.app

- **App:** HTML, CSS e JavaScript puros, empacotados com Vite. Sem framework.
- **Hospedagem:** Firebase Hosting, com deploy a cada push na `main` e link de prévia em cada pull request.

## Rodar localmente

```bash
npm install
npm run dev
```

`npm run build` gera o site estático em `dist/`, que é a pasta publicada pelo Firebase.

## Deploy

Push na `main` publica em produção pelo GitHub Actions (`.github/workflows`).
Na primeira vez, o GitHub precisa de permissão para publicar no Firebase. Rode uma vez, na raiz do projeto:

```bash
npx firebase-tools login
npx firebase-tools init hosting:github
```

Responda `Vinicercal/pokemon-matchups` para o repositório e **não** deixe o comando sobrescrever os workflows que já existem.
Ele cria o segredo `FIREBASE_SERVICE_ACCOUNT_POKEMON_MATCHUPS` no GitHub, que os workflows usam.

## O que já existe

- Seleção de tipo primário e secundário
- Defesa combinada dos dois tipos em faixas (0×, 0,25×, 0,5×, 2×, 4×)
- Detalhamento por tipo: o que ele resiste, o que o machuca, contra o que é forte e contra o que é fraco no ataque

## Próximos passos

Ver `docs/pendencias.md`.
