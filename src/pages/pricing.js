import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import fingoods from '../data/fingoods.js'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  small {
    font-weight: 300;
    font-size: .9rem;
  }
`
const CompareTable = styled.table`
  white-space: nowrap;
  margin: auto;
  margin-bottom: 2rem;
  strong {
    font-weight: 500;
    font-size: 1.2rem;
  }
  
  tbody {
    
  }
  th {
    text-align: left;
    padding: .5rem .6rem;
    color: ${props => props.theme.colors.base};
    background-color: ${props => props.theme.colors.tertiary};
    font-weight: 500;
    font-size: 1.1rem;
    border-right: 2px solid white;
    &:last-child {
      border-right: none;
    }
  }
  tr {
    td {
      padding: .4rem .5rem;
      border-bottom: 2px solid ${props => props.theme.colors.secondary};
    }
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
  span {
    color: green;
  }
`

class Pricing extends React.Component {
  state = {
    data: fingoods,
    sortBy: 'engine'
  }
  render() {
      const postNode = {
        title: `Pricing - ${config.siteTitle}`,
      }
      const familyOrder = ['Stander i', 'Stander X', 'Stander ZK', 'Stander SM', 'Stander LG', 'Sport i', 'Sport X', 'Velke HC', 'Velke LC', 'Velke GC', 'Velke Hydro', 'Velke Gear', 'ZTO', 'MMZ']

      return (
        <Wrapper>
          <Helmet>
            <title>{`Pricing - ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postNode={postNode} pagePath="Pricing" customTitle />
          <Container>
            <PageTitle>Pricing</PageTitle>
            <CompareTable>
              <tbody>
              <tr>
                <th>Model</th>
                <th>Deck</th>
                <th>Type</th>
                <th>Engine</th>
                <th>MSRP</th>
                <th><span>14% off</span></th>
              </tr>
                {familyOrder.map((family) =>
                [
                  <tr key={family}>
                    <td><strong>{family}</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>,
                  this.state.data.filter(({mow_family}) => mow_family === family).map((mower) => 
                    <tr key={mower.mow_sku}>
                      <td>{mower.mow_sku}</td>
                      <td>{mower.deck_size}"</td>
                      <td>{mower.deck_type.split('-')[0]}</td>
                      <td>{mower.vendor} {mower.model} {mower.horsepower} <small>HP</small> {mower.start_type}</td>
                      <td>{'$'}{mower.msrp.toLocaleString()}</td>
                      <td><span>{'$'}{Math.round(mower.msrp*.86).toLocaleString()}</span></td>
                    </tr>
                  )
                ]
                )
              }
              </tbody>
            </CompareTable>
              <small>
                Certain models subject to regional availability and may require special order lead times. 
                <br/>
                Local sales tax not included. Your dealer determines the final price. Please contact your dealer for details. Prices subject to change without notice.
                <br/>
                Expect Destination Surcharges of up of $400 for CA, OR, WA, MT, ID, NV, FL & AZ and up to $1,200 for HI & AK. Prices listed in USD, not valid in Canada or other countries, and do not include import duties or taxes.
                <br/>
                Models listed as "49 State" are not available in CA.
                <br/>
                Registration date, not order date dictates discount. You and dealer must ensure timely delivery and registration to ensure intended discount.
                <br/>
                Engine Power Rating: Kawasaki engines rated per SAE J1995 (gross) power testing with (98% + 3rd party verification) SAE J2723 labeling/rating. Kohler and Briggs & Stratton rated per SAE J1995 (gross) power testing with revised (95%) SAE J1940 labeling/rating
                <br/>
                ©1997-2019 Wright Manufacturing, Inc. All rights reserved. Stander, Intensity, ZK & X are trademarks of Wright Manufacturing, Inc.
              </small>
          </Container>
        </Wrapper>
      )
  }
}

export default Pricing