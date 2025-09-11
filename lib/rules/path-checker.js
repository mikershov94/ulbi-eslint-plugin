/**
 * @fileoverview feature sliced relative path
 * @author Michael E. Ershov
 */
"use strict";

const path = require("path");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: null, // `problem`, `suggestion`, or `layout`
		docs: {
			description: "feature sliced relative path",
			recommended: false,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {}, // Add messageId and message
	},

	create(context) {
		return {
			ImportDeclaration(node) {
				const importTo = node.source.value;

				const fromFilename = context.filename;

				if (shouldBeRelative(fromFilename, importTo)) {
					context.report(
						node,
						"В рамках одного FSD-слайса все пути должны быть относительными"
					);
				}
			},
		};
	},
};

function isPathRelative(path) {
	return path === "." || path.startsWith("./") || path.startsWith("../");
}

const layers = {
	pages: "pages",
	widgets: "widgets",
	features: "features",
	"my-entities": "my-entities",
	entities: "entities",
	shared: "shared",
};

function shouldBeRelative(from, to) {
	if (isPathRelative(to)) {
		return false;
	}

	const toArray = to.split("/");
	const toLayer = toArray[0];
	const toSlice = toArray[1];

	if (!toLayer || !toSlice || !layers[toLayer]) {
		return false;
	}

	const normalizedPath = path.toNamespacedPath(from);
	const projectFrom = normalizedPath.split("src")[1];
	const fromArray = projectFrom.split("\\");

	const fromLayer = fromArray[1] === "my-entities" ? "entities" : fromArray[1];
	const fromSlice = fromArray[2];

	if (!fromLayer || !fromSlice || !layers[fromLayer]) {
		return false;
	}

	return fromSlice === toSlice && toLayer === fromLayer;
}
