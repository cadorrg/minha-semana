# Minha Semana — MVP v1.1 (proposta PWA)

Primeira melhoria de instalação para GitHub Pages, sem alterar a lógica das tarefas, metas, hábitos, revisões, Pomodoro ou a chave dos dados locais.

## Arquivos
- `index.html`: mantém a aplicação e adiciona favicon SVG.
- `manifest.webmanifest`: nome, cores, URL inicial e escopo.
- `icon.svg`: ícone vetorial.
- `sw.js`: cache offline inicial e rede-primeiro para atualizações.

**Limitação:** o ícone é apenas SVG nesta proposta; alguns navegadores exigem PNG 192×192 e 512×512 para oferecer a instalação PWA, e o iOS pode precisar de Apple Touch PNG. O app continua acessível pelo navegador mesmo nesses casos.

## Dados
Os registros continuam armazenados no navegador (localStorage), sem sincronização entre dispositivos. Antes de testar, exporte um backup em Configurações. Não limpe os dados do site.

## Publicação
Revise e mescle o pull request para a branch main. O GitHub Pages usará os arquivos da branch configurada. Atualize a página para carregar o service worker.
