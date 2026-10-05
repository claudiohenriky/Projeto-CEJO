# Biblioteca Virtual CEJO

> **Documento de concepção inicial:** este material registra a ideia de partida do projeto, não uma especificação final nem um compromisso de implementação. Muitos detalhes ainda não foram decididos, e a equipe espera revisar e mudar partes importantes do escopo. Requisitos, prioridades, regras, perfis, tecnologias, arquitetura e interface podem ser alterados, acrescentados ou removidos após discussão entre a equipe e o orientador. Cada decisão deverá ser validada antes de ser tratada como definitiva.

## Identificação do projeto

- **Instituição:** Centro de Ensino Joca de Oliveira (CEJO) / SENAI
- **Turma:** 1º B – Técnico em Desenvolvimento de Sistemas
- **Orientador:** Prof. Rodrigo Vilela
- **Direção:** Diretora Aline
- **Início do projeto:** 04 de agosto de 2026
- **Data desta documentação:** 01 de outubro de 2026
- **Status:** ideia inicial em discussão e desenvolvimento; escopo e decisões sujeitos a revisão pela equipe e pelo orientador

## Equipe

- Luana de Sousa Silva (líder)
- Cláudio Henriky Gomes Santos
- Maryanny Santos Rodrigues
- Hellâyne Emally Felizardo da Silva
- Pedro Henrique Gomes Silva
- Yeison Jose Canelo Linares

## Sobre

A ideia inicial da Biblioteca Virtual CEJO é explorar a reunião do acesso ao acervo digital e à consulta de livros físicos com serviços escolares, como solicitações de uniformes e kits. Conteúdos educativos e um possível assistente virtual também foram levantados como possibilidades. Essa composição é provisória e pode mudar conforme a equipe definir o problema, validar as necessidades da escola e priorizar o que será desenvolvido.

O projeto está em desenvolvimento. Atualmente, o repositório oferece uma interface estática e uma tela de login que valida somente o preenchimento dos campos. A autenticação, o backend e os módulos descritos como requisitos ainda não estão disponíveis. Consulte a [seção do manual](#manual-de-uso-e-desenvolvimento) para testar a interface atual.

## Sumário

- [Requisitos do sistema](#requisitos-do-sistema)
- [Regras de negócio](#regras-de-negócio)
- [Arquitetura do sistema](#arquitetura-do-sistema)
- [Manual de uso e desenvolvimento](#manual-de-uso-e-desenvolvimento)
- [Histórico](#histórico)

## Requisitos do Sistema

Os itens abaixo são propostas iniciais para discussão e validação. Sua presença nesta documentação não significa que tenham sido aprovados como escopo final ou que já estejam implementados; requisitos poderão ser revistos, substituídos ou descartados.

### Requisitos funcionais

| ID   | Requisito                                                                                                                                                                              |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RF01 | **Autenticação de usuários:** permitir login de alunos e coordenadores utilizando usuário/RA e senha.                                                                                  |
| RF02 | **Biblioteca digital:** disponibilizar livros digitais para leitura e download em PDF, incluindo materiais de apoio como o Revisa.                                                     |
| RF03 | **Consulta de livros físicos:** permitir pesquisar um livro e consultar sua disponibilidade para empréstimo na biblioteca da escola.                                                   |
| RF04 | **Solicitação de uniformes e kits escolares:** permitir que o aluno abra solicitações pelo site.                                                                                       |
| RF05 | **Indicador de status por cores:** apresentar os estados vermelho (indisponível/demanda crítica), amarelo (disponível para pedido/em análise) e verde (aprovado/pronto para retirada). |
| RF06 | **Notificações:** informar o aluno quando o estado de sua solicitação for atualizado ou o item estiver liberado.                                                                       |
| RF07 | **Painel administrativo:** permitir que o coordenador consulte, analise, aprove ou rejeite/cancele solicitações de uniformes.                                                          |
| RF08 | **Área educativa:** oferecer áreas dedicadas a videoaulas e jogos interativos.                                                                                                         |
| RF09 | **Assistente virtual:** disponibilizar futuramente um assistente inteligente de apoio aos estudos.                                                                                     |

### Requisitos não funcionais

| ID    | Requisito                                                                                                                                       |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| RNF01 | **Identidade visual:** incorporar as cores e os elementos gráficos da escola CEJO, incluindo o mascote da SEDUC e o mascote próprio do sistema. |
| RNF02 | **Frontend:** desenvolver a interface com HTML5, CSS3 e JavaScript.                                                                             |
| RNF03 | **Backend:** desenvolver o servidor em Python utilizando Flask.                                                                                 |
| RNF04 | **Banco de dados:** utilizar o banco de dados relacional MySQL para persistir os registros.                                                     |
| RNF05 | **Usabilidade:** oferecer uma interface simples, limpa e intuitiva para alunos do ensino fundamental e médio.                                   |

## Regras de Negócio

### Solicitações de uniformes e kits

O estado de disponibilidade do item determina se o aluno pode solicitar e qual ação deve ocorrer:

| Indicador | Situação                                   | Comportamento do sistema                                                                          |
| --------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| Vermelho  | Estoque zerado ou demanda crítica          | A solicitação fica indisponível; o botão para solicitar permanece desabilitado.                   |
| Amarelo   | Item disponível, mas sujeito à conferência | O aluno pode enviar o pedido. A solicitação fica **Pendente**, aguardando análise do coordenador. |
| Verde     | Pedido aprovado e item separado            | O aluno recebe uma notificação e pode retirar o item presencialmente na escola.                   |

O coordenador pode aprovar ou cancelar um pedido pendente. O cancelamento deve ser registrado e o aluno informado da atualização. O estado verde só deve ser atribuído após a aprovação e a confirmação de que o item está separado para retirada.

### Perfis e permissões

**Aluno:**

- Entrar com usuário/RA e senha.
- Acessar e baixar livros digitais em PDF.
- Consultar a disponibilidade de livros físicos.
- Solicitar uniformes e kits quando o item estiver disponível para pedido.
- Acompanhar somente as próprias solicitações e seus estados.
- Acessar os conteúdos educativos previstos, como vídeos e jogos.

**Coordenador / Administração:**

- Acessar a área administrativa restrita.
- Consultar a lista global de solicitações de uniformes e kits.
- Aprovar ou cancelar solicitações pendentes.
- Gerenciar o acervo de livros e o estoque.

As permissões devem ser verificadas no backend; ocultar controles na interface, por si só, não protege operações administrativas.

### Notificações e autenticação

O aluno deve ser informado quando houver atualização relevante em seu pedido, especialmente quando for aprovado e estiver pronto para retirada. A notificação deve corresponder ao estado salvo da solicitação.

O sistema deve distinguir alunos e coordenadores, exigindo autenticação e autorização para acessar informações e executar ações administrativas. No estado atual, a tela de login apenas verifica o preenchimento dos campos; essa autenticação ainda não está implementada no backend.

## Arquitetura do Sistema

### Visão geral das camadas

1. **Frontend (cliente):** interface no navegador, construída com HTML5, CSS3 e JavaScript.
2. **Backend (servidor):** API e regras de negócio em Python com Flask, responsável por autenticação, autorização e processamento das solicitações.
3. **Banco de dados (persistência):** armazenamento relacional em MySQL para usuários, acervo, estoque e solicitações.

O frontend deverá se comunicar com o backend por requisições HTTP. O servidor validará permissões e dados antes de consultar ou alterar o banco.

### Estrutura do projeto

```text
Sistema-Biblioteca-CEJO/
├── README.md
├── requirements.txt
├── backend/
│   ├── app.py
│   ├── config.py
│   └── routes/
│       ├── alunos.py
│       ├── auth.py
│       └── bibliotecas.py
├── database/
│   ├── schema.sql
│   └── seed.sql
├── docs/
│   └── DOCUMENTACAO.md
└── frontend/
	├── index.html
	├── css/
	│   ├── login.css
	│   └── style.css
	├── JS/
	│   ├── login.JS
	│   └── main.JS
	├── imagens/
	└── pages/
		├── index.html
		├── login.html
		└── equipe.html
```

### Responsabilidades e tecnologias

- `frontend/`: páginas, estilos, scripts do navegador e imagens da identidade visual.
- `backend/app.py`: ponto de entrada planejado da aplicação Flask.
- `backend/config.py`: configuração planejada para conexão com o banco.
- `backend/routes/`: rotas planejadas de alunos, autenticação e biblioteca.
- `database/schema.sql` e `database/seed.sql`: estrutura e dados iniciais planejados para o MySQL.
- Frontend: HTML5, CSS3 e JavaScript.
- Backend: Python e Flask.
- Banco de dados: MySQL.

### Estado da implementação

A estrutura de diretórios e a interface estática estão no repositório. O formulário verifica se os campos foram preenchidos, mas não autentica usuários. A API Flask e a integração com MySQL ainda precisam ser implementadas e configuradas. Os módulos de livros, uniformes, notificações, jogos, vídeos e assistente virtual são requisitos do projeto e não estão disponíveis nesta fase.

## Manual de Uso e Desenvolvimento

### Situação atual

O JavaScript impede o envio do formulário vazio e informa que a integração com o backend está pendente. Quando os dois campos são preenchidos, a tela confirma apenas o preenchimento; não verifica RA, senha ou perfil. As demais funcionalidades descritas nesta documentação são planejadas, não recursos já disponíveis.

### Visualizar o frontend com Live Server

1. Abra a pasta `Sistema-Biblioteca-CEJO` no VS Code.
2. Instale a extensão **Live Server**, caso ainda não esteja instalada.
3. Abra `frontend/index.html` e selecione **Go Live**.
4. Na página institucional, use **Acessar portal** para abrir a tela de login.

Também é possível abrir `frontend/pages/login.html` diretamente no navegador e testar o envio com os campos vazios e preenchidos.

> O Live Server serve apenas arquivos estáticos. Ele não inicia a API Flask nem conecta ao MySQL.

### Fluxo previsto para uniformes e kits

1. O aluno escolhe o item e, quando aplicável, o tamanho.
2. O sistema apresenta o estado de disponibilidade.
3. Com estado **Vermelho**, informa a indisponibilidade e não permite solicitar.
4. Com estado **Amarelo**, permite solicitar e registra o pedido como pendente.
5. O coordenador analisa o pedido e aprova ou cancela.
6. Após aprovação e separação do item, o pedido passa a **Verde** e o aluno recebe a orientação para retirada presencial.

### Próximas integrações previstas

- Implementar autenticação e autorização de alunos e coordenadores.
- Configurar a API Flask e a conexão com o MySQL.
- Implementar os módulos de acervo, estoque, solicitações e notificações.
- Desenvolver as áreas de videoaulas e jogos educativos.
- Avaliar futuramente o assistente virtual de apoio aos estudos.

## Histórico

- **04/08/2026:** início do projeto.
- **01/10/2026:** data de referência da documentação inicial.
