require('es6-promise').polyfill();
require('isomorphic-fetch');

export async function getApiArticles() {
	return fetch('https://tr-prod-content-api.condenet.co.uk/2.0/article').then(
		res => {
			return res.json();
		}
	);
}

export async function getApiArticlesBySlug(slug) {
	return fetch(
		'https://tr-prod-content-api.condenet.co.uk/2.0/article/slug/' + slug
	).then(res => {
		return res.json();
	});
}

export async function getApiArticlesById(id) {
	return fetch(
		'https://tr-prod-content-api.condenet.co.uk/2.0/article/uid/' + id
	).then(res => {
		return res.json();
	});
}
