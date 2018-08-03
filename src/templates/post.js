import React from 'react'
import find from 'lodash/find'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'

const PostTemplate = ({ data }) => {
  const {
    title,
    slug,
    id,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const postGroup = find(
    data.allContentfulPost.edges,
    ({ node: post }) => post.tags[0] === tags[0]
  )

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} height={'50vh'} />

      <Container>
        <PageBody body={body} />
        {tags && <TagList tags={tags} />}
        <PostDate date={publishDate} />
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
          id
          title
          slug
          tags {
            title
          }
        }
      }
    }
  }
`

export default PostTemplate
