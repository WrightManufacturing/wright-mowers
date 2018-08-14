import React from 'react'
import fingoods from '../data/fingoods'
import styled from 'styled-components'
const specConfig = [
  {
    section: 'Drivetrain',
    fields: [
      {
        title: 'Pumps',
        field: 'pump'
      },
      {
        title: 'Motors',
        field: 'motor'
      },
      {
        title: 'Transaxle',
        field: 'transaxle'
      }
    ]
  },
  {
    section: 'Productivity',
    fields: [
      {
        title: 'Fuel Capacity',
        field: 'fuel_capacity'
      },
      {
        title: 'Speed',
        field: 'forward_speed'
      },
      {
        title: 'Acres/Hour',
        field: 'max_acres_per_hour'
      }
    ]
  },
  {
    section: 'Tires (Diameter x Width - Rim)',
    fields: [
      {
        title: 'Rear',
        field: 'rearTires'
      },
      {
        title: 'Front',
        field: 'frontTires'
      }
    ]
  },
  {
    section: 'Dimensions',
    fields: [
      {
        title: 'Length / Width (Deflector Up)',
        field: 'rearTires'
      },
      {
        title: 'Weight (Dry)',
        field: 'weight'
      }
    ]
  },
  {
    section: 'Deck',
    fields: [
      {
        title: 'Cut Height Range',
        field: 'cutHeightRange'
      },
      {
        title: 'Type',
        field: 'deck_type'
      },
      {
        title: 'Construction',
        field: 'deckConfig'
      },
      {
        title: 'Lift System',
        field: 'lift_system'
      },
      {
        title: 'Blades',
        field: 'blades'
      }
    ]
  }
]
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
  margin: .8rem 0rem;
  h3 {
    padding: .5rem;
    font-size: 1.25em;
    font-weight: 500;
    border-bottom: solid 1px ${props => props.theme.colors.highlight};
  }

  span {
    font-weight: 300;
  }

  h4 {
    align-self: flex-start;
    margin: 1rem auto .3rem .5rem;
    font-size: 1.1rem;
    span {
      font-size: .9rem;
      font-weight: 300;
    }
  }

  p {
    margin: 0rem .5rem;
    font-weight: 300;
  }

  strong {
    font-weight: 400;
  }
  small {
    font-weight: 300;
    font-size: .8em;
  }
`

const Model = styled.div`
  display: flex;
  flex-direction: column;
  border-right: solid 1px ${props => props.theme.colors.highlight};
  &:last-child {
    border: none;
  }
  section {
    background: ${props => props.theme.colors.tertiary};
    border-radius: 5px;
    padding: .5rem;
    margin: .5rem;
    line-height: 1.25;
  }
`

const Deck = styled.div`
  font-weight: 500;
  align-self: center;
  margin-top: .5rem;
  p {
    margin-left: 1.2rem;
  }

`

const Decks = styled.div`
  display:flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
`
const Vendor = styled.strong`
  border-radius: 5px;
` 

class ProductSpec extends React.Component {
  state = {
    data: fingoods
    .filter(({mow_family})=> mow_family === this.props.title)
    .map(spec => {
      spec.rearTires = `${spec.tire_diameter} x ${spec.rim_diameter} - ${spec.tire_width}`
      spec.frontTires = `${spec.caster_tire_diameter} x ${spec.caster_tire_width} - ${spec.caster_rim_diameter}`
      spec.dimensions = `${spec['length']}" / ${spec.width_deflector_up}"`
      spec.blades = `${spec.blade_length}" (${spec.blade_quantity})`
      spec.weight = `${spec.weight} lbs.`
      spec.deckConfig = `${spec.configuration}, ${spec.steel_gauge}`
      spec.cutHeightRange = `${spec.deck_min_cut_height} - ${spec.deck_max_cut_height}`
      spec.cutHeightRange = `${spec.deck_min_cut_height} - ${spec.deck_max_cut_height}`
      spec.fuel_capacity = `${spec.fuel_capacity}`
      spec.forward_speed = `${spec.forward_speed}`
      return spec
      }
    )
  }

  getUnique = (atribute, data) => Array.from(new Set(data.map((val) => val[atribute]))).map((val) => val)
  
  filterByDeckSize = (deck) => this.state.data.filter(({deck_size}) => deck_size === deck)

  groupByDeck = (atribute) => {
    const data = this.state.data
    const decks = Array.from(new Set(data.map(({deck_size}) => deck_size)))
    const uniqueArray = this.getUnique(atribute, data)
    const veryUniqueArray = Array.from(new Set(uniqueArray))
    if (veryUniqueArray.length > 1) {
      return decks.map((deck) => {
        const filtered = this.filterByDeckSize(deck)
        return {deckSize: deck,value: this.getUnique(atribute, filtered)}
      })
   } else if (veryUniqueArray[0].length > 1) {
      return Array.from(new Set(uniqueArray))
   } else {
     return null
   }
  }

  createRenderObject = () => {
    return specConfig.map(({section, fields}) => {
      return {
        section: section,
        fields: fields.map(({field, title}) => {
          return {
            field: this.groupByDeck(field),
            title: title
          }
        })
      }
    })
  }


  render() {
    const data = this.createRenderObject()
    const decks = this.getUnique('deck_size',this.state.data)
    return (
      <Specs>
        <h1>Specs</h1>

        <Spec>
          <h3>Engines & Deck Options</h3>
          <Decks>
            {decks.map(deck => 
              <Model key={deck + 'deck'}>
                <Deck>{deck}"</Deck>
                {this.filterByDeckSize(deck).map(({vendor, model, horsepower, msrp, mow_sku}) => 
                  <section
                    style={{borderTop: `solid 2px ${
                      vendor === 'Kawasaki' ? '#F34B4B' : 
                        vendor === 'Kohler' ? '#1C3075' : 
                          vendor === 'Briggs & Stratton' && '#ee9600'
                    }`}}
                  >
                    <strong>{vendor}</strong>
                    <br/>
                    <strong>{model}</strong> {horsepower}<small>HP</small>
                    <br/>
                    ${msrp.toLocaleString()}
                  </section>
                )}
              </Model>
            )}
          </Decks>
        </Spec>

        {
          data.map(({section, fields}, idx) =>
            <Spec key={idx + 'i'}>
              <h3>{section}</h3>
              {fields && fields.map(({title,field},idx) => 
                field && 
                <section key={idx + 'j'}>
                  <h4>{title}</h4>
                  {field.map((val) => 
                    val.deckSize ?
                      <Deck>
                        <p><strong>{val.deckSize}:</strong> {val.value}</p>
                      </Deck>
                      :
                      <p>{val}</p>
                  )}
                </section>
              )}
            </Spec>
          )
        }
          
      </Specs>
    )
  }
}

export default ProductSpec