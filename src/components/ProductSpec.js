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
  @media (max-width: ${props => props.theme.responsive.small}) {
    padding: .5rem 0rem;
    align-content: center;
    * {
      text-align: center;
    }
  }
  p {
    margin: .3rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin: auto;
  }
  h3 {
    font-size: 1.5em;
    border-top: 3px solid ${props => props.theme.colors.secondary};
    padding-top: 1.5rem;
    margin: 1rem .3rem;
    font-weight: 600;
    font-style: italic;
    span {
      font-size: .9rem;
      font-weight: 300;
    }
  }
  h4 {
    font-size: 1.2em;
    margin: .3rem;
    padding-top: .6rem;
    align-self: flex-start;
    font-weight: 500;
    @media (max-width: ${props => props.theme.responsive.small}) {
      align-self: center;
    }
  }
  section {
    border-radius: 5px;
    padding: .2rem 1rem;
    margin: 0rem 0rem;
    align-self: flex-start;
    @media (max-width: ${props => props.theme.responsive.small}) {
      align-self: center;
    }
    div {
      display: inline;
      font-weight: 500;
      &:after {
        content: ':  '
      }
    }
  }
`

const Model = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 4fr;
  background-color: white;
  margin: .3rem;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.20);

  @media (max-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  div {
    &:first-child {
      display: flex;
      font-size: 1.1rem;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme.colors.secondary};
    }
  }
  strong {
    font-weight: 500;
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
  render() {
    const data = this.state.data
    const decks = Array.from(new Set(data.map(({deck_size}) => deck_size)))
    const tires = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({tire_diameter, rim_diameter, tire_width}) => `${tire_diameter} x ${rim_diameter} - ${tire_width}`))
    const castors = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({caster_tire_diameter, caster_tire_width, caster_rim_diameter}) => `${caster_tire_diameter} x ${caster_tire_width} - ${caster_rim_diameter}`))
    const dimensions = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({length, width_deflector_up}) => `${length}" / ${width_deflector_up}"`))
    const weights = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({weight}) => `${weight} lbs.`))
    const blades = decks.map(deck => data.filter(({deck_size})=> deck_size === deck).map(({blade_length, blade_quantity}) => `${blade_length}" (${blade_quantity})`))
    return (
      <Specs>

        <h1>Specs</h1>

        <h3>Deck + Engine Options</h3>

        {this.state.data.map(({deck_size, vendor, model, horsepower, msrp, mow_sku}) => 
            <Model key={mow_sku}>
              <div>
                <strong>{deck_size}"</strong>
              </div>

              <div>
                <p>
                  <strong>{vendor}</strong>
                </p>
                <p>
                  {model} {horsepower}<small>HP</small>
                </p>
              </div>

              <div>
                <p>
                  <strong>${msrp.toLocaleString()}</strong>
                </p>
                <p>
                  {mow_sku}
                </p>
              </div>

            </Model>
          )}

        <h3>Drivetrain</h3>
        <h4>Pumps</h4>
           <p>{this.getUnique('pump')}</p>
        <h4>Motors</h4>
           <p>{this.getUnique('motor')}</p>
        
        <h3>Fuel</h3>
          <p>{this.getUnique('fuel_capacity')} Gal.</p>

        <h3>Speed</h3>
          <p>{this.getUnique('forward_speed')} MPH</p>

        <h3>Tires <span>{'(Diameter x Width - Rim)'}</span></h3>
          <h4>Rear</h4>
          {decks.map((deck,idx) => 
            <section key={idx}>
              <div>{deck}" </div>
              {<span key={idx}>{tires[idx][0]}</span>}
            </section>
          )}
          <h4>Front</h4>
          {decks.map((deck,idx) => 
            <section key={idx}>
              <div>{deck}" </div>
              {<span key={idx}>{castors[idx][0]}</span>}
            </section>
          )}

        <h3>Dimensions <span>{'(Deflector Up)'}</span></h3>
          <h4>Length / Width</h4>
          {decks.map((deck,idx) => 
            <section key={idx}>
              <div>{deck}" </div>
              {<span key={idx}>{dimensions[idx][0]}</span>}
            </section>
          )}

        <h4>Weight</h4>
          {decks.map((deck,idx) => 
            <section key={idx}>
              <div>{deck}" </div>
              {<span key={idx}>{weights[idx][0]}</span>}
            </section>
          )}
          
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
            {decks.map((deck,idx) => 
              <section key={idx}>
                <div>{deck}" </div>
                {<span key={idx}>{blades[idx][0]}</span>}
              </section>
            )}
      </Specs>
    )
  }
}

export default ProductSpec

// If there are multiple specs per product, split them up by deck size.
// If not, show just the spec without deck size