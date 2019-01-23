import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Contact Wright</PageTitle>
        <ContactForm />

        {/* <ul style={{textAlign: 'center'}}>
          <li>Address</li>
          <li>Wright Manufacturing, Inc.</li>
          <li>4600X Wedgewood Boulevard</li>
          <li>Frederick, MD 21703</li>
        </ul>
        <br/>
        <ul style={{textAlign: 'center'}}>
          <li>Phone</li>
          <li>(301) 360-9810</li>
        </ul> */}
      </Container>
    </Layout>
  )
}

export default Contact
