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

## Novidades da versão 1.5 — tarefas

- **Repetição opcional**: diária, semanal, mensal ou a cada X dias (por exemplo, 15 dias). Uma tarefa recorrente é armazenada como uma regra; o aplicativo mostra as ocorrências quando você abre a agenda, sem criar dezenas de cópias futuras.
- **Checklist**: adicione um item por linha ao criar ou editar a tarefa. A tarefa só poderá ser marcada como concluída depois que todos os itens forem concluídos. Ao concluir todos os itens, a tarefa será marcada automaticamente.
- **Vencimento separado da data planejada**: o prazo é opcional e deve ser igual ou posterior ao dia planejado. A tela Hoje mostra também até quatro compromissos com prazos atrasados ou nos próximos sete dias.
- **Ocorrências independentes**: concluir ou alterar o checklist de uma ocorrência recorrente não conclui automaticamente as demais. A edição oferece opções para alterar só uma ocorrência ou a série inteira. Uma ocorrência pode ser reagendada individualmente; também é possível excluir apenas uma ocorrência.
- Em repetições mensais iniciadas no dia 29, 30 ou 31, os meses mais curtos usam o último dia do mês (ex.: 31 de janeiro gera 28 de fevereiro em ano não bissexto).

**Importante:** repetição não significa agendamento confirmado: crie recorrências apenas para datas conhecidas, especialmente consultas. Os prazos na tela Hoje são lembretes dentro do aplicativo; não são notificações automáticas no celular.

**Compatibilidade:** dados antigos não são alterados. A chave de armazenamento continua `minha-semana-v1`, e os registros de ocorrências recorrentes ficam no campo `taskOccurrences`, exportado junto com o backup.
