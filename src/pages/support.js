import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Support = ({ data }) => {
  const postNode = {
    title: `Support - ${config.siteTitle}`
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Parts Search - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="parts-search" customTitle />

      <Container>
        <PageTitle>Support</PageTitle>
      </Container>
    </Layout>
  )
}

export default Support
