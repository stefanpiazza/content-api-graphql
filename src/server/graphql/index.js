var { buildSchema } = require('graphql');

import { schema as graphqlSchema } from './schema';
import { getArticles, getArticleById } from './resolvers';

var schema = buildSchema(graphqlSchema);

var root = {
	articles: getArticles(),
	article: ({ id }) => getArticleById(id)
};

export { schema, root };
