<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

ou

```bash
$ yarn
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

ou

```bash
$ yarn start
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## URL Testing

http://localhost:3001

### GraphQL Starter

GraphQL PlayGround --> http://localhost:3001/graphql

Query HelloWorld.

```graphql
{
  hello
}
```

Mutation CreateCat.

```graphql
mutation {
  createCat(input: { name: "maria2", age: 15, breed: "maria" }) {
    id
    name
    age
    breed
  }
}
```

Query Cats.

```graphql
{
  cats {
    id
    name
    age
    breed
  }
}
```
