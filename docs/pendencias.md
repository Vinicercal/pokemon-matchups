# Pendências

## Em andamento

Nada em andamento.

## Para ligar o repositório

- **Segredo do Firebase no GitHub:** rodar `npx firebase-tools init hosting:github` uma vez (ver README). Até isso, o workflow da `main` falha e a produção continua com a versão publicada pelo Antigravity, que é idêntica.

## Problemas conhecidos

- **Sem SEO nem prévia de compartilhamento:** falta `meta description`, título em português, Open Graph (imagem, título e descrição no card do LinkedIn), favicon, `robots.txt` e `sitemap.xml`. Prioridade, já que o objetivo é divulgar.
- **Tipos em inglês numa interface em português:** "Fire", "Water" no meio de "Tipo Primário". Decidir entre português (como nos jogos lançados no Brasil desde 2023) ou inglês (como a comunidade competitiva fala).
- **Acessibilidade:** os seletores de tipo são `span` clicáveis, sem foco por teclado e sem leitor de tela saber o que está selecionado. Deveriam ser botões de opção (`radio`) estilizados.
- **Cor carregando significado:** vermelho e verde distinguem fraqueza de resistência, o par que falha no daltonismo mais comum. O número do multiplicador deveria ser a informação principal.
- **⚡ como símbolo de imunidade:** é o ícone do tipo Elétrico.
- **Sem análises:** não há como saber quantas pessoas usam nem quais tipos consultam. Ver o padrão do `portfolio-web` (PostHog e GA4 num único `analytics.js`).

## Perguntas em aberto

- **Momento de uso principal:** consulta rápida no celular durante a batalha ou montagem de time no computador? Decide a hierarquia da tela.
- **Entrada por tipo ou por Pokémon:** buscar "Gyarados" e ver os tipos preenchidos (dados da PokeAPI) é mais próximo de como o jogador pensa.
- **Geração:** mostrar qual tabela vale (Gen 6+) ou permitir escolher.
