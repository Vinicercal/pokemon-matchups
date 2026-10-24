# Pokémon Matchups

Página única para consultar fraquezas e resistências de um Pokémon a partir dos tipos dele.
Criada no Antigravity e publicada direto no Firebase; virou repositório em 24/10/2026. O Vini (Product Designer) conduz o projeto.
Objetivo atual: melhorar a página para ela virar peça de portfólio e post no LinkedIn.

Leia antes de mexer em qualquer coisa:

- `docs/produto.md`: o que a página é, para quem, decisões já tomadas e tom de voz.
- `docs/arquitetura.md`: stack, pastas, de onde vêm os dados e deploy.
- `docs/pendencias.md`: o que falta, problemas conhecidos e perguntas em aberto.

## Comandos

```bash
npm run dev       # servidor local em http://localhost:5173 (o .claude/launch.json usa 5174, para não colidir com o portfolio-web)
npm run build     # build de produção em dist/
npm run preview   # serve o dist/ para conferir o build
```

Rode `npm run build` antes de dar uma tarefa por concluída. Não há testes automatizados ainda.

## Regras que não são óbvias pelo código

- **Deploy:** push na `main` publica em produção (https://pokemon-matchups.web.app). Trabalhe em ramos (`feature/`, `fix/`, `refactor/`, `chore/`) e só junte na `main` com o Vini de acordo. Cada pull request ganha um link de prévia do Firebase; mande o link para ele conferir.
- **Tabela de tipos em um lugar só:** `src/data.js`. Ela segue a Geração 6 em diante (com Fada). Mudar uma relação exige conferir com uma fonte oficial e registrar em `docs/produto.md`.
- **Sem `onclick` no HTML gerado.** O JavaScript roda como módulo; funções não ficam globais, então handlers inline quebram em silêncio. Use `addEventListener` ou `element.onclick`.
- **Tema escuro fixo**, com tokens de cor no `:root` de `src/style.css`. As cores dos tipos (`--type-*`) são as convencionais da franquia; não troque sem conversar.
- **Nome dos tipos em inglês na interface** é o estado atual, não uma decisão (ver `docs/pendencias.md`).

## Como trabalhar com o Vini

- Ele é designer, não desenvolvedor: explique o que está fazendo e por quê, em português, sem presumir vocabulário de engenharia.
- Decisões de fluxo, componentes e texto de interface são dele. Proponha alternativas e pergunte; não decida sozinho.
- Ele pede para ser contrariado: aponte riscos e alternativas em vez de só concordar.
