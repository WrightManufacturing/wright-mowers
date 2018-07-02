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
  ClearRefinements ,
} from 'react-instantsearch/dom';

const Title = styled.h3`
  font-size: 1.2em;
  padding: .2em;
`

const ResultsArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`

const FacetArea = styled.div`
  border: solid #f2f2f2 3px;
  display: inline-block;
  hr {
    border-top: solid #f2f2f2 3px;
  }
`

const Product = ({ hit }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <span>
        <Highlight attribute="mow_sku" hit={hit} />
        <br/>
        <Highlight attribute="mow_category" hit={hit} />
        <br/>
        <Highlight attribute="mow_family" hit={hit} />
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
          appId="X5LECM4LTF"
          apiKey="a09c58abd526e52c52edcf13b52344db"
          indexName="dev_SPECS"
        > 

        <ClearRefinements  />
        
        <Stats />
        <SearchBox />

        <ResultsArea>
      
        <FacetArea>
            <Title>Category</Title>
            <RefinementList attribute="mow_category"/>
            <hr/>
            <Title>Family</Title>
            <RefinementList attribute="mow_family"/>
            <hr/>
            <Title>Deck</Title>
            <RefinementList attribute="deck_size"/>
            <hr/>
            <Title>Generation</Title>
            <RefinementList attribute="generation"/>
            <hr/>     
            <Title>Engine Brand</Title>
            <RefinementList attribute="vendor"/>
            <hr/> 
            <Title>Engine Model</Title>
            <RefinementList attribute="model"/>
            <hr/>
            <Title>Start Type</Title>
            <RefinementList attribute="start_type"/>

          </FacetArea>

          <Hits hitComponent={Product} />

        </ResultsArea>

          

        </InstantSearch>
        
      </Container>
    </div>
  )
}

export default Support
