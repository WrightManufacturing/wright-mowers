import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Author from '../components/Author'

const PostTemplate = ({ data }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
    author
  } = data.contentfulPost

  const postNode = data.contentfulPost

  const postGroup = data.allContentfulPost.edges.filter(({node: post}) => post.tags[0].title === tags[0].title && title !== post.title)

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} height={'50vh'} />

      <Container>
        <PostDate date={publishDate} />
        {author && <Author author={author} />}
        <PageBody body={body} />
        {tags && <TagList tags={tags} />}

        {postGroup.length > 0 &&
          <h4 
          style={{
            fontWeight: '700',
            margin: '1rem 0rem',
            fontSize: '1.3rem'
          }}
        >Related:</h4>
        }

        <CardList>
          {postGroup.map(({ node: post }) => (
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
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      id
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
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
        id
        slug
      }
      heroImage {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
    allContentfulPost {
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
  }
`

export default PostTemplate
