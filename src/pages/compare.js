import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import fingoods from '../data/fingoods.js'
import styled from 'styled-components'

const CompareTable = styled.table`
  white-space:nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  margin: auto;
  width: 300px;
  
  tbody {
    
  }
  th {
    text-align: left;
    padding: .5rem .6rem;
    color: ${props => props.theme.colors.base};
    background-color: ${props => props.theme.colors.secondary};
    border: 2px solid ${props => props.theme.colors.secondary};
    border-right: solid white -3px;
    font-weight: 500;
    font-size: 1.1rem;
  }
  tr {
    transition: all 0.1s;
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
  td {
    padding: .5rem .6rem;
    border: 2px solid ${props => props.theme.colors.secondary};
  }
  span {
    color: green;
  }
`

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

      <CompareTable>
        <tbody>
        <tr>
          <th>Mower Family</th>
          <th>SKU (Model)</th>
          <th>Deck</th>
          <th>Deck Type</th>
          <th>Engine</th>
          <th>Price</th>
          <th><span>16% off</span></th>
        </tr>
          {fingoods.map((mower) => 
            <tr key={mower.mow_sku}>
              <td>{mower.mow_family}</td>
              <td>{mower.mow_sku}</td>
              <td>{mower.deck_size}</td>
              <td>{mower.deck_type.split('-')[0]}</td>
              <td>{mower.vendor} {mower.model}</td>
              <td>{'$'}{mower.msrp.toLocaleString()}</td>
              <td><span>{'$'}{Math.round(mower.msrp*.84).toLocaleString()}</span></td>
            </tr>
          )}
        </tbody>
      </CompareTable>
        

      </Container>
    </div>
  )
}

export default Compare
