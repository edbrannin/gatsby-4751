import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({
  data,
}) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query Gatsby4751 {
    allProblemNode {
      edges {
        node {
          NoWhitespace
          Has_Whitespace
        }
      }
    }
  }
`;

