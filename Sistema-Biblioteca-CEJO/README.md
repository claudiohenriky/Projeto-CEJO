# Sistema Biblioteca CEJO

## Estrutura

- `frontend/index.html`: página institucional e ponto de entrada do site.
- `frontend/pages/login.html`: acesso visual ao portal da biblioteca.
- `frontend/pages/equipe.html`: página pública com os integrantes do projeto.
- `frontend/css/`: estilos das páginas.
- `frontend/js/`: scripts do frontend.
- `frontend/assets/brasao-branco.png`: brasão escolar usado nas páginas do site.
- `backend/`: aplicação Flask e rotas da API.
- `database/`: esquema e dados iniciais do banco.
- `docs/`: documentação da concepção inicial do projeto.

## Documentação

O registro da ideia inicial, com requisitos e decisões ainda sujeitos a discussão e mudanças, está em [`docs/DOCUMENTACAO.md`](docs/DOCUMENTACAO.md). Ele não representa uma especificação final.

## Abrir com Live Server

Abra `Sistema-Biblioteca-CEJO` como pasta do workspace no VS Code. A configuração `.vscode/settings.json` define `frontend` como raiz do Live Server. Se você abrir a pasta superior `Projeto-CEJO-main`, a configuração de workspace nessa pasta também aponta para o frontend correto.

1. Instale a extensão **Live Server** no VS Code.
2. Abra `frontend/index.html`.
3. Clique em **Go Live** na barra inferior.

A página institucional deve abrir na raiz do servidor. O botão **Acessar portal** leva ao formulário de login.

## Estado atual

O Live Server executa apenas o frontend estático. O formulário valida se usuário e senha foram preenchidos, mas ainda não autentica usuários. O backend Flask, as rotas, os arquivos SQL e as dependências precisam ser implementados e configurados para habilitar o login real. Os demais módulos descritos na documentação são requisitos do projeto, não funcionalidades disponíveis nesta fase.

## Organização recomendada

Mantenha cada responsabilidade no seu lugar: páginas em `frontend/pages/`, estilos em `frontend/css/`, scripts em `frontend/js/`, imagens em `frontend/assets/`, arquivos de banco em `database/` e orientações em `docs/`. Quando a API for iniciada, documente aqui os comandos de instalação e execução do backend e os passos para configurar o banco.
