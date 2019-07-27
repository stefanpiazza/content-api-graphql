# content-api-graphql

GraphQL service for querying content-api

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

## Schema

```
type Images {
  default: Image
  hero: Image
}

type Image {
  height: Int
  id: ID
  orientation: String
  title: String
  width: Int
}

type Author {
  id: ID,
  name: String
  slug: String
}

type Tag {
  id: ID,
  slug: String
  title: String
}

type Article {
  authors: [Author]
  body: String
  id: ID
  images: Images
  slug: String
  tags: [Tag]
  title: String
}

type Query {
  articles: [Article]
  article(id: ID, slug: String): Article
}
```
