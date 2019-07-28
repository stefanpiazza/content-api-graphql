var express = require("express");
var graphqlHTTP = require("express-graphql");

import { root, schema } from "./graphql";

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
