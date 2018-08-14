import React, {Fragment} from 'react'
import fingoods from '../data/fingoods'
import styled from 'styled-components'

const Specs = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.base};
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: auto;
  padding: 1rem;
  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin: auto;
  }
  p {
    margin: .3rem;
    font-weight: 300;
  }
`

const Spec = styled.div`
  border-left: solid 1px ${props => props.theme.colors.highlight};
  padding-left: .8rem;
  margin: .8rem 0rem;
  h3 {
    padding: .5rem;
    margin-left: -.8rem;
    font-size: 1.25em;
    border-bottom: solid 1px ${props => props.theme.colors.highlight};
  }

  span {
    font-weight: 300;
  }

  h4 {
    margin-top: 1rem;
    align-self: flex-start;
    span {
      font-size: .9rem;
      font-weight: 300;
    }
  }

  p {
    margin: .5rem 0rem;
    font-weight: 300;
  }

  div {
    padding: .25rem;
    margin: .5rem .25rem;
    border-left: 2px solid ${props => props.theme.colors.secondary};
  }
`

const Model = styled.tbody`
  tr {
    border-bottom: solid 1px ${props => props.theme.colors.highlight};
    &:last-child {
      border: none;
    }
  }
  td {
    padding: .4rem;
    line-height: 1.25;
  }
  strong {
    font-weight: 400;
  }
  small {
    font-weight: 300;
    font-size: .8em;
  }
`

class ProductSpec extends React.Component {
  state = {
    data: fingoods.filter(({mow_family})=> mow_family === this.props.title)
  }
  getUnique = (atribute) => {
    return Array.from(new Set(this.state.data.map((val) => val[atribute]))).map((val) => val)
  }

  groupByDeck = (atribute) => {
    const data = this.state.data
    const decks = Array.from(new Set(data.map(({deck_size}) => deck_size)))
    return decks.map((deck,idx) => 
      <div key={idx}>
        <strong>{deck}": </strong>
        {<span key={idx}>{atribute[idx][0]}</span>}
      </div>
    )
  }

  render() {
    const data = this.state.data
    const decks = Array.from(new Set(data.map(({deck_size}) => deck_size)))
    const tires = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({tire_diameter, rim_diameter, tire_width}) => `${tire_diameter} x ${rim_diameter} - ${tire_width}`))
    const castors = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({caster_tire_diameter, caster_tire_width, caster_rim_diameter}) => `${caster_tire_diameter} x ${caster_tire_width} - ${caster_rim_diameter}`))
    const dimensions = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({length, width_deflector_up}) => `${length}" / ${width_deflector_up}"`))
    const weights = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({weight}) => `${weight} lbs.`))
    const blades = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({blade_length, blade_quantity}) => `${blade_length}" (${blade_quantity})`))
    const acresPerHours = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({max_acres_per_hour}) => `${max_acres_per_hour}`))
    return (
      <Specs>
        <h1>Specs</h1>

        <Spec>
          <h3>Options & Pricing</h3>
          <table>
            <Model>

            {this.state.data.map(({deck_size, vendor, model, horsepower, msrp, mow_sku}) => 
                <tr key={mow_sku}>
                  <td>
                    <strong>{deck_size}"</strong>
                  </td>
                  <td>
                    <strong>{vendor}</strong>
                    <br/>
                    {model} {horsepower}<small>HP</small>
                  </td>
                  <td>
                    <strong>{mow_sku}</strong>
                    <br/>
                    ${msrp.toLocaleString()}
                  </td>
                </tr>
              )}
              </Model>
          </table>
        </Spec>

        <Spec>
          <h3>Drivetrain</h3>

          <h4>Pumps</h4>
          <p>{this.getUnique('pump')}</p>

          <h4>Motors</h4>
          <p>{this.getUnique('motor')}</p>

          <h4>Transaxle</h4>
          <p>{this.getUnique('transaxle')}</p>
        </Spec>

        <Spec>
          

          <h3>Productivity</h3>
          <h4>Fuel Capacity<p>{this.getUnique('fuel_capacity')} GAL</p></h4>
          <h4>Speed<p>{this.getUnique('forward_speed')} MPH</p></h4>
          <h4>Acres/Hour</h4>
          {this.groupByDeck(acresPerHours)}
        </Spec>

        <Spec>
          <h3>Tires <span>{'(Diameter x Width - Rim)'}</span></h3>
          <h4>Rear</h4>
          {this.groupByDeck(tires)}
          <h4>Front</h4>
          {this.groupByDeck(castors)}
        </Spec>

        <Spec>
          <h3>Dimensions</h3>
          <h4>Length / Width <span>{'(Deflector Up)'}</span></h4>
          {this.groupByDeck(dimensions)}
          <h4>Weight <span>{'(Dry)'}</span></h4>
          {this.groupByDeck(weights)}
        </Spec>

        <Spec>
          <h3>Deck</h3>
          <h4>Cut Height Range</h4>
          <p>{`${this.getUnique('deck_min_cut_height')}" - ${this.getUnique('deck_max_cut_height')}"`}</p>
          <h4>Type</h4>
          <p>{this.getUnique('deck_type')}</p>
          <h4>Construction</h4>
          <p>{this.getUnique('configuration')} {this.getUnique('steel_gauge')} Steel</p>
          <h4>Lift System</h4>
          <p>{this.getUnique('lift_system')}</p>
          <h4>Blades</h4>
          {this.groupByDeck(blades)}
        </Spec>
          
      </Specs>
    )
  }
}

export default ProductSpec

// If there are multiple specs per product, split them up by deck size.
// If not, show just the spec without deck size