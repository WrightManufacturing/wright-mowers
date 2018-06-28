import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'
import AlgoliaStyles from '../styles/AlgoliaStyles.css'

import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  RefinementList,
  Stats,
} from 'react-instantsearch/dom';

const Title = styled.h3`
  font-size: 1.2em;
  padding: .2em;
`

const FacetArea = styled.div`
  border: solid #f2f2f2 3px;
  display: inline-block;
`


const Product = ({ hit }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <span>
        <Highlight attribute="parent_part_desc" hit={hit} />
        <br/>
        <Highlight attribute="ps_parent_part" hit={hit} />
        <br/>
        <Highlight attribute="ps_child_part" hit={hit} />
      </span>
    </div>
  );
}



const Support = ({ data }) => {
  const postNode = {
    title: `Support - ${config.siteTitle}`,
  }

  return (
    <div>
      <Helmet>
        <title>{`Parts Search - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="parts-search" customTitle />

      <Container>

        <PageTitle>Support</PageTitle>

        <InstantSearch
          appId="5XBD1PVTNK"
          apiKey="09d24d6c67ba3e812fefbcb75904edb2"
          indexName="dev_FINGOODS"
        > 
        <Stats />
        <SearchBox />

          <FacetArea>
            <Title>Parent</Title>
            <RefinementList attribute="ps_parent_part"/>

            <Title>Parent Description</Title>
            <RefinementList attribute="parent_part_desc"/>
          </FacetArea>

          <Hits hitComponent={Product} />

        </InstantSearch>
        
      </Container>
    </div>
  )
}

export default Support
