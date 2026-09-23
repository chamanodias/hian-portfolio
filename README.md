# Hian Vieira | Personal Trainer

Portfólio em Next.js, TypeScript e App Router. Projeto independente dentro de `hian-portfolio`; o site Ponto de Vista permanece na pasta superior.

## Desenvolvimento

Na pasta deste projeto:

```powershell
npm ci
npm run dev
```

A aplicação usa a porta **3001**, evitando conflito com o projeto principal. Não iniciamos servidores automaticamente.

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

## Conteúdo e integração

- `src/data/profile.ts`: nome, formação, contato, Instagram, CREF, retrato, anamnese e valores dos planos.
- `src/app/page.tsx`: conteúdo das seções e espaços para material futuro.
- `src/app/tokens.css`: cores dos dois temas.
- `src/components/ContactForm.tsx`: preparação local da mensagem. O visitante revisa e envia pelo WhatsApp; não há API, SMTP, armazenamento ou confirmação fictícia.
- `src/components/Plans.tsx`: seleção acessível de frequência, com transferência da opção para o contato.

O texto anexado foi usado como material de referência, não como histórico de funcionalidades implementadas. A instrução final nele sobre `/api/matricula` contradiz trechos anteriores; essa API não foi criada. Nenhuma informação de saúde é coletada nesta prévia. O cadastro e o questionário de anamnese aguardam definição.

O material informa UPE, `@hiianvieira`, telefone e preços para 2 e 5 aulas semanais. Os preços de 3 e 4 aulas não foram inferidos. O conteúdo inicial e as condições devem ser revisados por Hian. Há `noindex` nos metadados até essa aprovação.

## Antes de publicar

Consulte [conteudo-pendente.md](docs/conteudo-pendente.md). Não substitua espaços vazios por depoimentos, credenciais ou fotos de alunos inventados. Não publique a prévia como portfólio final.

## Design e imagens

Referência enviada pelo usuário: `docs/referencia-visual.jpeg`. A direção usa preto e branco, tipografia forte, seções amplas e recortes diagonais, adaptados para celular. A marca tipográfica é provisória.

Apenas o ambiente de academia é conceitual, gerado por IA e identificado no site. Retratos e casos reais permanecem aguardando material. Registro do prompt e origem em [imagem-conceitual.md](docs/imagem-conceitual.md). Fontes Geist locais com licença em `src/app/fonts/LICENSE.txt`.
