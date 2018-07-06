import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const CategoryTemplate = ({ data }) => {
  const { title, slug, slogan, mainImage, features, products} = data.contentfulCategory
  const postNode = data.contentfulCategory
  console.log(features)
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
          {mainImage && <img src={mainImage.file.url} alt=""/>}
          <div>
          {products && products.map((val,idx) => 
            <div key={idx}>
              {val.title}
              {/* {val.icon.file.url && <img src={val.icon.file.url} alt=""/>} */}
            </div>
           )}
          </div>

          <div>
          {features && features.map((val,idx) => 
            <div key={idx}>

              <p style={{fontSize: '30px'}}>{val.featureTitle}</p>
              <img src={val.featureAsset.file.url} alt=""/>
                {val.featureDescription.internal.content}
            </div>
           )}
        </div>
        </div>

      </Container>
    </div>
  )
}

export const query = graphql`
  query categorytQuery($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      title
      slug
      slogan
      mainImage {
        file {
          url
        }
      }
      products {
        title
        icon {
          file {
            url
          }
        }
      }
      features {
        featureTitle
        featureDescription {
          internal {
            content
          }
        }
        featureAsset {
          file {
            url
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
