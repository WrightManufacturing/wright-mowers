import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import Link from 'gatsby-link'


const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges
  const tags = data.allContentfulTag.edges
  return (
    <div>
      <SEO />
      <Container>
        <PageTitle small>
          Articles
        </PageTitle>
        {tags.map(({node: tag}, idx) => (
          <div key={idx} >
            <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
          </div>
        ))}
        <CardList>
          {posts.map(({ node: post }) => (
            <Card
              key={post.id}
              slug={post.slug}
              image={post.heroImage}
              title={post.title}
              date={post.publishDate}
              excerpt={post.body}
            />
          ))}
        </CardList>
      </Container>
    </div>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          tags {
            title
            slug
            id
          }
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulTag {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Index
