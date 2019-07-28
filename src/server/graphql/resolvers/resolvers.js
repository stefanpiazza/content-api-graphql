import {
	getApiArticles,
	getApiArticlesBySlug,
	getApiArticlesById
} from './utils';

export async function getArticles() {
	var res = await getApiArticles();
	var apiArticles = res.items;

	return apiArticles.map(apiArticle => {
		return getArticle(apiArticle.data);
	});
}

export async function getArticleById(id) {
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
		name: apiAuthor['full_name'],
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
