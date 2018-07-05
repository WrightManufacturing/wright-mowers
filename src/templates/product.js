import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const ProductTemplate = ({ data }) => {
  const { title, slug, slogan, shortDescription, mainImage, startingPrice } = data.contentfulProduct
  const postNode = data.contentfulProduct

  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <Container>
        <PageTitle>{title}</PageTitle>
        <div>
          {slogan}
          {shortDescription}
          <img src={mainImage.file.url} alt=""/>
          {startingPrice}
        </div>
      </Container>
    </div>
  )
}

export const query = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
      slogan
      shortDescription
      mainImage {
        file {
          url
        }
      }
      startingPrice
      metaDescription {
        internal {
          content
        }
      }
    }
  }
`

export default ProductTemplate
