import React from 'react'
import styled from 'styled-components'

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.section`
  background-color: ${props => props.theme.colors.secondary};
  display: block;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
  text-align: center;
  h4 {
    font-weight: 500;
    font-size: 1.2em;
  }
  img {
    height: 6rem;
    padding: 1rem;
  }
  p {
    line-height: 1.3em;
  }
  @media (max-width: ${props => props.theme.responsive.small}) {
    p {
      text-align: left;
    }
    margin: 1rem 0;
  }
`

const Feature = props => {
  return (
    <List>
      {props.features.map(feature => (
        <Item key={feature.id}>
          <h4>{feature.title}</h4>
          <img src={feature.featureAsset.file.url} alt=""/>
          <p>{feature.description.internal.content}</p>
        </Item>
      ))}
    </List>
  )
}

export default Feature