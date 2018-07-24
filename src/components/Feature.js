import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const List = styled.div`
  display: flex;
  flex-direction: column;
  
`

const Item = styled.div`
  margin: 0rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  h4 {
    text-align: left;
    font-weight: 500;
    font-size: 1.5em;
    margin: 1rem;
  }
  p {
    line-height: 1.3rem;
    margin: 1rem;
    text-align: left;
  }
  section {
    width: 50%;
  }
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.tertiary};
    flex-direction: row-reverse;
    p {
      text-align: right;
    }
    h4 {
      text-align: right;
    }
  }
  @media (max-width: ${props => props.theme.responsive.small}) {
    p {
      text-align: left;
    }
    margin: .7rem 0;
    flex-direction: column;
  }
`

const FeatureImage = styled(Img)`
background-color: white;
  width: 30rem;
  height: auto;
`

const Feature = props => {
  return (
    <List>
      {props.features.map(feature => (
        <Item key={feature.id}>
            {feature.featureAsset &&
              <FeatureImage
              height={feature.featureAsset.height}
              sizes={feature.featureAsset.sizes}
              backgroundColor={props => props.theme.colors.secondary}
              />
            }
          <section>
            <h4>{feature.title}</h4>
            <p>{feature.description.internal.content}</p>
          </section>
        </Item>
      ))}
    </List>
  )
}

export default Feature