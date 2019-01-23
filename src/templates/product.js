import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Feature from '../components/Feature'
import ProductSpec from '../components/ProductSpec'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
const Slogan = styled.section`
  text-align: center;
  background-color: ${props => props.theme.colors.base};
  color: ${props => props.theme.colors.tertiary};
  div {
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    margin: auto;
    padding: 1rem;
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    line-height: 1.6rem;
    font-weight: 300;
  }
`

const ProductNav = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  background-color: rgba(233, 233, 233, 0.9);
  padding: 0.4rem 0.5rem;
  div {
    max-width: ${props => props.theme.sizes.maxWidth};
    display: flex;
    flex-direction: row wrap;
    align-items: center;
    justify-content: flex-end;
    margin: auto;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    display: inline-block;
    padding: 0rem 0.4rem;
    border-right: solid 1px ${props => props.theme.colors.base};
    font-weight: 600;
    align-self: center;
    &:last-child {
      background-color: ${props => props.theme.colors.highlight};
      color: ${props => props.theme.colors.base};
      font-weight: 500;
      border-radius: 1rem;
      border: none;
      padding: 0.2rem 0.6rem;
      margin-left: 0.5rem;
      margin-right: 1rem;
      @media (max-width: ${props => props.theme.responsive.small}) {
        margin-right: 0rem;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    display: inline;
    margin: auto;
    margin-left: 0;
    padding: auto;
    text-transform: uppercase;
    @media (max-width: ${props => props.theme.responsive.small}) {
      font-size: 1.1rem;
    }
  }
`

const SpecContainer = styled.div`
  width: 100%;
  margin: auto;
`

const ProductTemplate = ({ data }) => {
  const {
    title,
    slug,
    slogan,
    shortDescription,
    mainImage,
    features
  } = data.contentfulProduct
  const postNode = data.contentfulProduct
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>

      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <ProductNav>
        <div>
          <PageTitle>{title}</PageTitle>
          <Link to="/stand-on/">Specs & Pricing</Link>
          <Link to="/stand-on/">Buy</Link>
        </div>
      </ProductNav>

      <Hero title={title} image={mainImage} height={'35vh'} />

      <Slogan>
        <div>
          <h2>{slogan}</h2>
          <p>{shortDescription}</p>
        </div>
      </Slogan>

      <Container>{features && <Feature features={features} />}</Container>

      <SpecContainer>
        <ProductSpec title={title} />
      </SpecContainer>
    </Layout>
  )
}

export const query = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
      slogan
      shortDescription
      youtubeVideo
      features {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        featureAsset {
          sizes(maxWidth: 500) {
            ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
      }
      mainImage {
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
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

export default ProductTemplate
