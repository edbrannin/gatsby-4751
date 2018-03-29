/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
const crypto = require(`crypto`)

exports.sourceNodes = ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators
  // Create nodes here.

  const row = {};
  row.NoWhitespace = "OK";
  row['Has Whitespace'] = "OK";

  const gatsbyNode = Object.assign({
    // Required Gatsby fields
    id: `ProblemNode1`,
    parent: "__SOURCE__",
    children: [],
    internal: {
      type: `ProblemNode`,
      contentDigest: crypto
      .createHash("md5")
      .update(JSON.stringify(row))
      .digest("hex")
    }
  }, row);

  createNode(gatsbyNode);
}
