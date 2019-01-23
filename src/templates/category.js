import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import styled from 'styled-components'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import ProductIconHeader from '../components/ProductIconHeader.js'
import Feature from '../components/Feature.js'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const Slogan = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
`

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 2rem 1rem;
  line-height: 1.7rem;
  @media (max-width: ${props => props.theme.responsive.small}) {
    text-align: left;
  }
`

const CategoryTemplate = ({ data }) => {
  const {
    title,
    slug,
    slogan,
    mainImage,
    features,
    products,
    longDescription
  } = data.contentfulCategory
  const postNode = data.contentfulCategory
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
      {products && <ProductIconHeader products={products} />}
      <Container>
        <PageTitle small>{title}</PageTitle>
        <Slogan>{slogan}</Slogan>
        <Img
          height={mainImage.height}
          sizes={mainImage.sizes}
          backgroundColor={'white'}
        />
        <Description>{longDescription.internal.content}</Description>
        {features && <Feature features={features} />}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query categorytQuery($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      title
      slug
      slogan
      mainImage {
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      products {
        slug
        id
        title
        thumbnail {
          sizes(maxWidth: 150) {
            ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
      }
      longDescription {
        internal {
          content
        }
      }
      features {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        featureAsset {
          sizes(maxWidth: 400) {
            ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
      }
      metaDescription {
        internal {
          content
        }
      }
    }
  }
`

export default CategoryTemplate
