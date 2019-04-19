import {graphql} from 'gatsby'
import {Page, List, Card} from '~/components'

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
      filter: {fields: {category: {eq: "contributors"}}}
    ) {
      edges {
        node {
          fields {
            key
            slug
          }
          frontmatter {
            avatar {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            name
            bio
            github
            twitter
            website
          }
        }
      }
    }
  }
`

export default ({
  data: {
    allMarkdownRemark: {edges},
  },
}) => (
  <Page>
    <List data={edges} Template={Card.Contributor} />
  </Page>
)