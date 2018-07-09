import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import fingoods from '../data/fingoods.js'


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
        {fingoods.map((val, idx) => 
          <h3>
            {val.mow_sku}___{'$' + val.msrp.toLocaleString()}
          </h3>
        )}
      </Container>
    </div>
  )
}

export default Compare
