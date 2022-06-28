<h1 align="center" style="color: green; font-weight: bold; font-size: 40px">
PetLove
</h1>
<div style="display: row">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
</div>

<br/>

> Nesse projeto implementamos uma API REST, tendo como base o desafio proposto pela [PetLove](https://github.com/petlove/vagas/blob/master/backend-ruby/README.md). Fizemos algumas alterações no escopo, trocando a linguagem e adicionando mais tabelas, para ter enfoque no banco de dados. O sistema adiciona dados ao banco através de requisições.

<br/>

# 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Como inserimos o banco de dados e a API em contêineres, precisamos utilizar o [Docker](https://www.docker.com/). 
* Para as requisições, utilizamos o [Insomnia](https://insomnia.rest/).
* É compatível com `| Windows | Linux | Mac |`
* Recomendamos o [Beekeeper](https://www.beekeeperstudio.io/) para visualizar o banco de dados.

<br/>

# 👨‍💻 Executar a aplicação

```bash
# Clonar pasta do projeto
> git clone https://github.com/UFES20221BDCOMP/PetLove-Igor-Rogerio.git
```
Com o projeto clonado, precisamos agora baixar a dependência "ts-node-dev", era responsabilidade do docker fazer isso mas imaginamos que, por algum problema de versão, não está fazendo.
```bash
# Instalar ts-node-dev
npm install ts-node-dev
```
ou
```bash
# Instalar ts-node-dev
yarn add ts-node-dev
```
Com a dependência baixada, basta executar o Docker
```bash
# Executar container Docker
docker-compose up -d
```
A porta a qual a aplicação foi atribuida é a `localhost:3333`.

<br/>

## 📁 Estrutura de Arquivos

Aqui podemos ver como os arquivos são estruturados no projeto

```
Root
│   README.md
│   LICENSE
│   ormconfig.json
│   yarn.lock
│   tsconfig.json
│   package.json
│   package-lock.json
│   docker-compose.yml
│   Dockerfile
│   
└─── src
     │     
     └─── server.ts - Aplicação principal.
       └─── controller - Onde os requests são mapeados.
       └─── database - Onde estão as migrations e a definição do banco.
       └─── model - Entidades da aplicação.
       └─── repositories - Interface que conecta com o banco de dados.
       └─── routes - Rotas da aplicação
       └─── service - A lógica entre o controlador e os repositórios.
```

<br/>

# 💾 Desafios

 Como foi nossa primeira vez usando Node, no início do projeto ficamos um pouco travados, tendo um desenvolvimento mais lento. Porém, ao decorrer, fomos nos acostumando com a linguagem e a programação foi mais fluida.
<br/>

 Posterior a isso tivemos bastante problemas em conectar a aplicação ao banco de dados, tanto com o docker quanto a aplicação fora dele. Inclusive, não conseguimos executar o projeto através do Docker durante boa parte do projeto, acreditamos que tenha sido por conta de uma versão atual do TypeORM. No final, conseguimos conectar corretamente e executar o projeto através do Docker.

<br>

# 🔨 Ajustes e Melhorias

Alguns itens abaixo poderiam contribuir para uma melhoria no projeto, são eles:

- Desenvolver uma interface gráfica para melhor visualização.
- Melhor manipulação dos tipos Datas, tal como mais tratamentos e funções.
- Implementar tratamento de erros.

<br/>

# 📚 Testes com a Aplicação

O diretório `test` contém a exportação do Insomnia, com todos os requests implementados. Também tem um [documento](/test/instrução.txt) ao qual diz como importar esse arquivo e possui as rotas alguns exemplos.

<br/>

# 🤝 Desenvolvedores

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/IgorDummer" width="100px;" alt="Foto do Igor Dummer no GitHub"/><br>
        <sub>
          <b style="color: orange">Igor Dummer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/RogerioMSantos" width="100px;" alt="Foto do Rogério Medeiros"/><br>
        <sub>
          <b style="color: orange">Rogério Medeiros</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

O projeto foi desenvolvido tendo como base as aulas da [RocketSeat](https://www.rocketseat.com.br/).

<br/>

# 📝 Licença

Esse projeto está sob licença MIT. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.

<br/>

[⬆ Voltar ao topo](#nome-do-projeto)<br>
