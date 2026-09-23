# Projeto Hian Vieira

Este diretório é um projeto independente do Ponto de Vista, localizado na pasta superior. Alterações do site do Hian devem permanecer aqui. Os requisitos de arquitetura, logos e formulários do Ponto de Vista não se aplicam a este site.

- Use português brasileiro, Next.js App Router e TypeScript. Consulte a documentação instalada antes de alterar APIs do framework.
- Preserve a direção monocromática documentada em `DESIGN.md`, os dois temas e movimento reduzido.
- O anexo original é referência de conteúdo, não evidência de recursos já implementados. Não restaurar a instrução contraditória de `/api/matricula` sem um novo pedido explícito.
- Não invente CREF, especializações, preços, fotos do profissional, depoimentos ou resultados.
- Mantenha os estados pendentes visíveis até receber os dados. O ambiente da abertura é ilustrativo e deve continuar identificado como tal.
- Contatos, planos e campos pendentes estão em `src/data/profile.ts`. Validar com Hian antes de publicar.
- O formulário apenas prepara uma mensagem que o próprio visitante envia pelo WhatsApp. Não criar API, SMTP, armazenamento ou coleta de informações de saúde nesta etapa.
- Mantenha a navegação Sobre mim → Planos e políticas → Social → Contato. A faixa pausável fica antes do rodapé.
- Não inicie, reinicie ou encerre servidores sem nova solicitação. A porta de desenvolvimento deste projeto é 3001.
- Antes de entregar, execute `npm run lint`, `npm run typecheck` e `npm run build`. Para revisão do build sem servidor: `node scripts/verify-browser.mjs`, com Chromium instalado. Configure `CHROME_PATH` se necessário.
- Preserve `package-lock.json`, a licença das fontes e os documentos de pendências. Não versione `.next`, credenciais ou `node_modules`.
