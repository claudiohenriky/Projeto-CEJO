# Sistema Biblioteca CEJO

## Estrutura

- `frontend/index.html`: página institucional e ponto de entrada do site.
- `frontend/pages/login.html`: acesso visual ao portal da biblioteca.
- `frontend/css/`: estilos das páginas.
- `frontend/JS/`: scripts do frontend.
- `frontend/imagens/`: identidade visual e imagens locais.
- `backend/`: aplicação Flask e rotas da API.
- `database/`: esquema e dados iniciais do banco.
- `docs/`: arquitetura, regras e manual do sistema.

## Abrir com Live Server

Abra `Sistema-Biblioteca-CEJO` como pasta do workspace no VS Code. A configuração `.vscode/settings.json` define `frontend` como raiz do Live Server. Se você abrir a pasta superior `Projeto-CEJO-main`, a configuração de workspace nessa pasta também aponta para o frontend correto.

1. Instale a extensão **Live Server** no VS Code.
2. Abra `frontend/index.html`.
3. Clique em **Go Live** na barra inferior.

A página institucional deve abrir na raiz do servidor. O botão **Acessar portal** leva ao formulário de login.

## Estado atual

O Live Server executa apenas o frontend estático. O formulário ainda não autentica usuários: o backend Flask, as rotas, os arquivos SQL e as dependências precisam ser implementados e configurados para habilitar o login real.

## Organização recomendada

Mantenha cada responsabilidade no seu lugar: páginas em `frontend/pages/`, estilos em `frontend/css/`, scripts em `frontend/JS/`, arquivos de banco em `database/` e orientações em `docs/`. Quando a API for iniciada, documente aqui os comandos de instalação e execução do backend e os passos para configurar o banco.
