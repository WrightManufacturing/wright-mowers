import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import TagList from '../components/TagList'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

class Articles extends React.Component {
  state = { selectedTag: null }

  render() {
    const data = this.props.data
    const posts = data.allContentfulPost.edges
    const tags = data.allContentfulTag.edges.map(({ node }) => node)
    return (
      <Layout>
        <SEO />
        <Container>
          <PageTitle small>Articles</PageTitle>

          {tags && <TagList tags={tags} />}

          <CardList>
            {posts.map(({ node: post }) => (
              <Card
                key={post.id}
                slug={post.slug}
                image={post.heroImage}
                title={post.title}
                date={post.publishDate}
                excerpt={post.body}
                author={post.author}
              />
            ))}
          </CardList>
        </Container>
      </Layout>
    )
  }
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
          author {
            id
            name
            biography {
              internal {
                content
              }
            }
            profilePicture {
              sizes(maxWidth: 64) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
          }
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

export default Articles
