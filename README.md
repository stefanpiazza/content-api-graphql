# content-api-graphql

Graphql service for querying content-api

## Quickstart

```
	npm install

	npm run dev

	navigate to localhost:4000
```

## Examples

```
  query {
    article(id: "lbjz0oLPWkm") {
      id
      images {
        default {
          id
        }
      }
    }
  }
```
