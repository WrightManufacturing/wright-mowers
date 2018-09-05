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
      },
      {
        title: 'Gear Box',
        field: 'transmission'
      }
    ]
  },
  {
    section: 'Productivity',
    fields: [
      {
        title: 'Fuel Capacity',
        field: 'fuel'
      },
      {
        title: 'Speed',
        field: 'speed'
      },
      {
        title: 'Acres/Hour',
        field: 'max_acres_per_hour'
      }
    ]
  },
  {
    section: 'Tires',
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
        title: 'Length / Width',
        field: 'dimensions'
      },
      {
        title: 'Weight',
        field: 'newWeight'
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
  color: ${props => props.theme.colors.base};
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: auto;
  padding: 1rem;
  
  p {
    margin: .3rem;
    font-weight: 300;
  }
`

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`

const GradientBreak = styled.div`
    background-image: linear-gradient(to right, #333333 0%, white 100%);
    height: 2px;
    width: 100%;
`

const Spec = styled.div`
  margin: 1.2rem auto 2.2rem 0rem;
  h3 {
    margin-bottom: .4rem;
    font-size: 1.25em;
    font-weight: 500;
  }
  span {
    font-weight: 300;
  }

  h4 {
    align-self: flex-start;
    margin-top: 1rem;
    margin-bottom: .5rem;
    font-size: 1.1rem;
    span {
      font-size: .9rem;
      font-weight: 300;
    }
  }

  p {
    margin: 0rem;
    margin-bottom: .5rem;
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
  border-right: solid 1px ${props => props.theme.colors.secondary};
  padding-top: .5rem;
  &:last-child {
    border: none;
  }
  section {
    border-radius: 3px;
    background: ${props => props.theme.colors.tertiary};
    padding: .5rem;
    margin: .5rem .7rem;
    line-height: 1.25;
    aside {
      display:none;
      margin-top: .5rem;
      margin-left: -.5rem;
      position: absolute;
      background: ${props => props.theme.colors.secondary};
      padding: .2rem;
      border-radius: 3px;
    }
    &:hover {
      aside {
        display: block;
      }
    }
  }
`

const Deck = styled.div`
  strong {
    border-radius: 2px;
    padding: 0rem .2rem;
  }
  p {
    margin: 0rem;
  }
  display: inline-block;
  margin-right: .5rem;
  margin-bottom: .5rem;
  padding-bottom: 0rem;
  border: solid 1px ${props => props.theme.colors.tertiary};
  padding: .3rem;
  border-radius: 3px;
`

const Decks = styled.div`
  display:flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
`



class ProductSpec extends React.Component {
  state = {
    data: fingoods
    .filter(({mow_family})=> mow_family === this.props.title)
    .map(spec => {
      spec.rearTires = `${spec.tire_diameter} x ${spec.tire_width} - ${spec.rim_diameter}`
      spec.frontTires = `${spec.caster_tire_diameter} x ${spec.caster_tire_width} - ${spec.caster_rim_diameter}`
      spec.dimensions = `${spec['length']}" / ${spec.width_deflector_up}"`
      spec.blades = `${spec.blade_length}" (${spec.blade_quantity})`
      spec.newWeight = `${spec.weight} lbs.`
      spec.deckConfig = `${spec.configuration}, ${spec.steel_gauge} Steel`
      spec.cutHeightRange = `${spec.deck_min_cut_height}" - ${spec.deck_max_cut_height}"`
      spec.fuel = `${spec.fuel_capacity} gal.`
      spec.speed = `${spec.forward_speed} mph`
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
   } else if (veryUniqueArray[0] === undefined) {
      return null
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
      <div>
      <Header>Specs</Header>
      <Specs>
        <Spec style={{width: '100%'}}>
          <h3>Engine & Deck Options</h3>
          <GradientBreak />
          <Decks>
            {decks.map((deck, idx) => 
              <Model key={idx + 'deck'}>
                <div style={{marginLeft: '.7rem', fontWeight: '500', marginTop: '.5rem'}}>{deck}"</div>
                {this.filterByDeckSize(deck).map(({vendor, model, horsepower, msrp, mow_sku},idx) => 
                  <section
                    key={idx + 'engine'}
                    style={{borderLeft: `solid 2px ${
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
                    <aside>{mow_sku}</aside>
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
              <GradientBreak/>
              {fields && fields.map(({title,field},idx) => 
                field && 
                <section key={idx + 'j'}>
                  <h4>{title}</h4>
                  {field.map((val) => 
                    val.deckSize ?
                      [
                        <Deck key={val.deckSize}>
                          <p key={val.deckSize + 'b'} ><strong>{val.deckSize}:</strong> {val.value.length > 1 ? `${val.value.sort()[0]} - ${val.value[val.value.sort().length-1]}` : val.value}</p>
                        </Deck>,
                        <br/>
                      ]
                      :
                      <p key={val.deckSize + 'x'}>{val}</p>
                  )}
                </section>
              )}
            </Spec>
          )
        }
          
      </Specs>
      </div>
    )
  }
}

export default ProductSpec