<h1 align="center">
  Polls App
</h1>

<h4 align="center">
    A poll creator API with real-time results visualization 
</h4>

<p align="center">
  <a href="#about">About</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#languages-and-technologies">Languages and technologies</a> •
  <a href="#prerequisites">Prerequisites</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#contact">Contact</a> •
</p>

## About
This was a simple API developed during the 'NLW Expert' event led by instructor [Diego Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/).

## Key Features

- The user can create a poll
- The users can vote on poll
- The users can track the poll's results in real time

## Languages and technologies
Back-end: ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)

## Prerequisites

To run the project on your machine, you must have <a href="https://nodejs.org/en">Node.js</a> and <a href="https://www.docker.com/">Docker</a> installed, preferably both in their latest stable version.

## How To Use

### Clone this repository
```bash
# Clone this repository
$ git clone git@github.com:joseuilton/polls-app-server.git

# Go into the repository
$ cd polls-app-server
```

### Run Docker compose

You can configure the PostgreSQL and Redis image according to your preference in the 'docker-compose.yml' file or follow the default configuration.

```bash
# Run docker compose with PostgreSQL image
$ sudo docker compose up -d
```

### Configure and run API

add a ".env" file with database's configuration, follow the structure of ".env.sample"

```bash
# Install all dependencies
$ npm install

# Run all migrations
$ npx prisma migrate dev

# Run API
$ npm run dev
```

## Contact
José Uilton - [@joseuilton](https://www.linkedin.com/in/joseuilton/) - joseuilton.siqueira@gmail.com

Project link: https://github.com/joseuilton/myscret

---
Made with 💜 by José Uilton