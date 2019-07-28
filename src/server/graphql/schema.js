export const schema = `
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
`;
