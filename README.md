O projeto está usando o bun como CLI ao invés do npm.

## Preparar o banco

```bash
$ docker compose up -d
```

## Instalação

```bash
$ bun install
```


## Executando o servidor

```bash
# development
$ bun start

# watch mode
$ bun dev

# production mode
$ bun prod
```

## Rodar testes

```bash
# testes de unidade
$ bun test

# testes de unidade em modo watch
$ bun test:watch

# testes end-to-end (e2e)
$ bun test:e2e

# teste de cobertura de código
$ bun test:cov

## teste para gerar HTML como relatório de teste
$ bun test:html

## teste de cobertura em relatório HTML
$ bun test:html-cov

## rodar uma espécie de site com o html gerado
$ bun test:ui

```

## Visualizar o teste no navegador

Acesse http://localhost:4173