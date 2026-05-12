# Barber Digital - Sistema de Gestão

> ⚠️ **Aviso:** Este projeto está em andamento e é desenvolvido para **fins acadêmicos**.

## Sobre o Projeto

O **Barber Digital** é um aplicativo web focado na gestão e organização de barbearias. O sistema é programado para atender o fluxo de administração de usuários e os agendamentos de serviços, mantendo um controle facilitado por horários, clientes e profissionais.

## Tecnologias e Arquitetura

O projeto foi construído em **Node.js** estruturado através do padrão de arquitetura **MVC (Model-View-Controller)**.

Construído com as seguintes ferramentas chave:
- **Express**: Framework backend de roteamento e middlewares.
- **Sequelize**: ORM (Object-Relational Mapper) robusto utilizado para o mapeamento de tabelas.
- **MySQL2**: Driver de comunicação com banco de relacional de dados.
- **EJS (Embedded JavaScript)**: Motor de visualização (View Engine) responsável pela renderização da interface localmente.

## Funcionalidades e Escopo Mapeado

Como projeto em andamento, as seguintes funcionalidades e estruturas base foram desenvolvidas e configuradas:

- **Controle de Usuários:** Módulo para manter o registro unificado no modelo de `Users` contendo e-mail, senha e nome.
- **Atendimentos e Serviços:** Sistema detalhado no modelo `Atendimentos` estruturado para guardar:
  - Nome do cliente e contato (telefone).
  - Horários e agendamentos detalhados (dia e hora).
  - Seleção de serviços (`Corte de cabelo`, `Barba`, `Sobrancelha`, `Outros`).
  - Profissional responsável.

## Estrutura de Pastas e Arquivos

- `aplicativo_web/`: Core do projeto contendo a estrutura web Node.js.
  - `app.js` e `server.js`: Ponto de entrada e configuração do servidor HTTP (rodando via porta `8080`).
  - `database/`: Arquivos voltados à configuração e infraestrutura do banco de dados (`dbconfig.js`).
  - `mvc/`: Lógica central e arquitetura em camadas separados em `controllers` (controladores web), `models` (classes do modelo de negócio), `routes` (separação de rotas/endpoints) e `views` (telas EJS).
  - `schemas/`: Mapeamento de tabelas físicas do banco utilizando a entidade Model do Sequelize.
  - `services/`: Classes de regras e serviços adjunto ao controlador (ex. `UsuarioService.js`).
- `Documentação`: A raiz do projeto hospeda o diagrama funcional (`caso_uso.drawio`) e os registros formais de sistema nas extensões `.pdf` e `.docx`.

## Como Executar Localmente

### Pré-requisitos
- **Node.js** instalado na sua máquina local;
- **MySQL** devidamente configurado e em execução.

### Passos de Instalação e Execução
1. Clone ou baixe o repositório na sua máquina de forma local.
2. Através do terminal, navegue até o diretório da aplicação:
   ```bash
   cd aplicativo_web
   ```
3. Realize a instalação das dependências declaradas no repositório:
   ```bash
   npm install
   ```
4. Verifique as credenciais de sua máquina local no banco e valide se a conexão está batendo com sua máquina no arquivo `database/dbconfig.js`.
5. Execute a inicialização do projeto.
   ```bash
   node app.js
   ```
   *Nota: O `Sequelize` atualmente está configurado em `app.js` com `{ alter: true }` para sincronizar automaticamente a estrutura da tabela no banco ao iniciar.*

6. Acesse via HTTP através da porta informada (ex.: http://localhost:8080/user/index)
