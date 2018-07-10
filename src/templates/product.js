import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Feature from '../components/Feature'
import Hero from '../components/Hero'
import fingoods from '../data/fingoods.js'


const Slogan = styled.h2`
  text-align: center;
  font-size: 2em;
  font-weight: 300;
`

const ProductNav = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  background-color:rgba(242, 242, 242, 0.8);
  border-bottom: 1px solid ${props => props.theme.colors.base};
  padding: .4rem .5rem;
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
    padding: 0rem .4rem;
    border-right: solid 1px ${props => props.theme.colors.base};
    font-weight: 600;
    align-self: center;
    &:last-child {
      background-color:rgba(51, 51, 51, 0.8);
      color: white;
      font-weight: 500;
      border-radius: 1rem;
      border: none;
      padding: .2rem .6rem;
      margin-left: .5rem;
      margin-right: 1rem;
      @media (max-width: ${props => props.theme.responsive.small}) {
        margin-right: 0rem;
      }
    }
    &:hover {
      opacity: .8;
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

const CompareTable = styled.table`
  white-space:nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  margin: auto;
  width: 300px;
  
  tbody {
    
  }
  th {
    text-align: left;
    padding: .5rem .6rem;
    color: ${props => props.theme.colors.base};
    background-color: ${props => props.theme.colors.secondary};
    border: 2px solid ${props => props.theme.colors.secondary};
    border-right: solid white -3px;
    font-weight: 500;
    font-size: 1.1rem;
  }
  tr {
    transition: all 0.1s;
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
  td {
    padding: .5rem .6rem;
    border: 2px solid ${props => props.theme.colors.secondary};
  }
  span {
    color: green;
  }
`

const ProductTemplate = ({ data }) => {
  const { title, slug, slogan, shortDescription, mainImage, startingPrice, features } = data.contentfulProduct
  const postNode = data.contentfulProduct
  return (
    <div>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
      <ProductNav>
          <div>
          <PageTitle>{title}</PageTitle>
          <Link to="/stand-on/">Specs</Link>
          <Link to="/stand-on/">Configure</Link>
          <Link to="/stand-on/">Buy</Link>
          </div>
      </ProductNav>
      <Hero title={title} image={mainImage} height={'50vh'} />

      <Container>
        
          <Slogan>{slogan}</Slogan>
          <hr/>
          <Slogan>{shortDescription}</Slogan>

          {features && <Feature features={features} />}

                <CompareTable>
        <tbody>
        <tr>
          <th>Mower Family</th>
          <th>SKU (Model)</th>
          <th>Deck</th>
          <th>Deck Type</th>
          <th>Engine</th>
          <th>Price</th>
          <th><span>16% off</span></th>
        </tr>
          {fingoods.filter(val => val.mow_family === title).map((mower) => 
            <tr key={mower.mow_sku}>
              <td>{mower.mow_family}</td>
              <td>{mower.mow_sku}</td>
              <td>{mower.deck_size}</td>
              <td>{mower.deck_type.split('-')[0]}</td>
              <td>{mower.vendor} {mower.model}</td>
              <td>{'$'}{mower.msrp.toLocaleString()}</td>
              <td><span>{'$'}{Math.round(mower.msrp*.84).toLocaleString()}</span></td>
            </tr>
          )}
        </tbody>
      </CompareTable>

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
      features {
        id
        title
        description {
          internal {
            content
          }
        }
        featureAsset {
          sizes(maxWidth: 400) {
          ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
      }
      mainImage {
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
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
