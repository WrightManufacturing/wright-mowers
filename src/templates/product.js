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
import ReactPlayer from 'react-player'
import CompareTable from '../components/CompareTable'

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
    line-height: 1.4rem;
  }
`

const ProductNav = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  background-color:rgba(242, 242, 242, 0.9);
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


const ProductTemplate = ({ data }) => {
  const { title, slug, slogan, shortDescription, mainImage, features, youtubeVideo } = data.contentfulProduct
  const postNode = data.contentfulProduct
  const videoOptions = {
    height: '360',
    width: '640',
    playerVars: {
      modestbranding: 1,
      rel: 0
    }
  };
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
      <Hero title={title} image={mainImage} height={'35vh'} />

      <Slogan>
        <div>
        <h2>{slogan}</h2>
        <p>{shortDescription}</p>
        </div>
      </Slogan>

      <Container>
        
          <ReactPlayer
            style={{
              // width: '640px',
              // height: '375px',
              margin: 'auto',
              paddingBottom: '1rem'
            }}
            url={youtubeVideo}
            config={{
              youtube: {
                playerVars: { 
                  controls: 1
                }
              }
            }}
          />

          {features && <Feature features={features} />}

        <CompareTable>
          <tbody>
          <tr>
            <th>SKU (Model)</th>
            <th>Deck</th>
            <th>Engine</th>
            <th>Price</th>
            <th><span>16% off</span></th>
          </tr>
          {fingoods.filter(val => val.mow_family === title).map((mower) => 
            <tr key={mower.mow_sku}>
              <td>{mower.mow_sku}</td>
              <td>{mower.deck_size}</td>
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
      youtubeVideo
      features {
        id
        title
        description {
          internal {
            content
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