import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import DemoForm from '../components/DemoForm'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const DemoWright = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Demo A Wright - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="demo-a-wright" customTitle />

      <Container>
        <PageTitle>Demo A Wright</PageTitle>

        <DemoForm />
      </Container>
    </Layout>
  )
}

export default DemoWright
