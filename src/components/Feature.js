import React, {Fragment} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Item = styled.div`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin: .75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.tertiary};
  strong {
    font-weight: bold;
  }
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
    padding: .6rem;
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  @media (max-width: ${props => props.theme.responsive.medium}) {
    p {
      text-align: left;
    }
    margin: .7rem 0;
    display: block;
  }
`

const FeatureImage = styled(Img)`
  background-color: white;
  width: 30rem;
  height: auto;
  @media (max-width: ${props => props.theme.responsive.medium}) {
    width: 100%;
  }
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
              />
            }
          <section>
            <h4>{feature.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: feature.description.childMarkdownRemark.html }} ></div>
          </section>
        </Item>
      ))}
    </List>
  )
}

export default Feature