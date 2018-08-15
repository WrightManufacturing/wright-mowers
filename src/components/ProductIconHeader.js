import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  margin: auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding-top: .5rem;
  @media (max-width: ${props => props.theme.responsive.small}) {
    mask-image: linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
    align-content: flex-start;
  }
`

const Thumbnail = styled(Img)`
  height: 4rem;
`
const Product = styled.li`
  margin: .5rem;
  transition: all 0.2s;

  &:hover {
    opacity: .8;
  }
  &:last-child {
    padding-right: 1rem;
  }
  h3 {
    font-weight: 500;
    width: 6rem;
    margin: .3rem 0rem;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    white-space:nowrap;
  }
`

const ProductIconHeader = props => {
  return (
    <div style={{  backgroundColor: '#f2f2f2'}}>
    <Wrapper>
      <List>
        {props.products.map(product => (
          <Product key={product.id}>
            <Link to={`/${product.slug}/`} exact>
              <Thumbnail
                sizes={product.thumbnail.sizes}
              />
            <h3>{product.title}</h3>
            
            </Link>
          </Product>
        ))}
      </List>
    </Wrapper>
    </div>
  )
}

export default ProductIconHeader