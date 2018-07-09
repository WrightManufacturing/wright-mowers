import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const DemoForm = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Demo A Wright - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="demo-a-wright" customTitle />

      <Container>
        <PageTitle>Demo A Wright</PageTitle>
        
        <ContactForm />
      </Container>
    </div>
  )
}

export default DemoForm
