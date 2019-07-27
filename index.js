var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");

require("es6-promise").polyfill();
require("isomorphic-fetch");

var schema = buildSchema(`
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
`);

var root = {
	articles: getArticles(),
	article: ({ id }) => getArticleById(id)
};

async function getApiArticles() {
	return fetch("https://tr-prod-content-api.condenet.co.uk/2.0/article").then(
		res => {
			return res.json();
		}
	);
}

async function getApiArticlesBySlug(slug) {
	return fetch(
		"https://tr-prod-content-api.condenet.co.uk/2.0/article/slug/" + slug
	).then(res => {
		return res.json();
	});
}

async function getApiArticlesById(id) {
	return fetch(
		"https://tr-prod-content-api.condenet.co.uk/2.0/article/uid/" + id
	).then(res => {
		return res.json();
	});
}

async function getArticles() {
	var res = await getApiArticles();
	var apiArticles = res.items;

	return apiArticles.map(apiArticle => {
		return getArticle(apiArticle.data);
	});
}

async function getArticleById(id) {
	var apiArticle = await getApiArticlesById(id);

	return getArticle(apiArticle.data);
}

function getArticle(apiArticle) {
	return {
		authors: getAuthors(apiArticle.profiles),
		body: apiArticle.body,
		id: apiArticle.uid,
		images: getImages(apiArticle.images),
		tags: getTags(apiArticle.tags),
		slug: apiArticle.slug,
		title: apiArticle.title
	};
}

function getTags(apiTags) {
	return apiTags.map(apiTag => {
		return getTag(apiTag);
	});
}

function getTag(apiTag) {
	return {
		id: apiTag.uid,
		title: apiTag.title
	};
}

function getAuthors(apiAuthors) {
	return apiAuthors.map(apiAuthor => {
		return getAuthor(apiAuthor);
	});
}

function getAuthor(apiAuthor) {
	return {
		id: apiAuthor.uid,
		name: apiAuthor["full_name"],
		slug: apiAuthor.slug
	};
}

function getImages(apiImages) {
	return {
		default: apiImages.default ? getImage(apiImages.default) : null,
		hero: apiImages.hero ? getImage(apiImages.hero) : null
	};
}

function getImage(apiImage) {
	return {
		height: apiImage.height,
		id: apiImage.image_uid,
		orientation: apiImage.orientation,
		title: apiImage.title,
		width: apiImage.width
	};
}

var app = express();
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
