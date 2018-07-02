import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import fingoods from '../data/fingoods.js'

console.log(fingoods)

const Specs = ({ data }) => {
  const postNode = {
    title: `Specs - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Specs - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Specs</PageTitle>
      </Container>
    </div>
  )
}

export default Specs
