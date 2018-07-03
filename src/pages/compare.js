import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
// import fingoods from '../data/fingoods.js'

// console.log(fingoods)

const Compare = ({ data }) => {
  const postNode = {
    title: `Compare - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Compare - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Compare" customTitle />

      <Container>
        <PageTitle>Compare</PageTitle>

        <div>Product</div>
        <div>Product</div>
        <div>Product</div>  
      </Container>
    </div>
  )
}

export default Compare
