import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import Link from 'gatsby-link'
import styled from 'styled-components'

const TagList = styled.div`
  display: flex;
  flex-flow: row wrap;
  a {
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    padding: .4rem .8rem;
    margin: 0rem 1rem .8rem 0rem;
    border-radius: 1rem;
    transition: all 0.2s;
    white-space:nowrap;
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`

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

        <TagList >
          {tags.map(({node: tag}, idx) => (
              <Link key={idx} to={`/tag/${tag.slug}/`}>{tag.title}</Link>
          ))}
        </TagList>
        
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
