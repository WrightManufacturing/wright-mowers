import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Pricing = ({ data }) => {
  const postNode = {
    title: `Pricing - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Pricing - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="pricing" customTitle />

      <Container>
        <PageTitle>Pricing</PageTitle>
      </Container>
    </div>
  )
}

export default Pricing
