import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const List = styled.ul`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: ${props => props.theme.colors.tertiary};
  overflow-x: auto;
  padding-top: .5rem;
`

const Product = styled.li`
  margin: auto 1.2rem 1rem 1rem;
  transition: all 0.2s;
  &:hover {
    opacity: .8;
  }
  div {
    font-weight: 500;
  }
  img {
    padding: .4rem;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    white-space:nowrap;
  }
`

const ProductIconHeader = props => {
  return (
    <List>
      {props.products.map(product => (
        <Product key={product.id}>
          <Link to={`/${product.slug}/`} exact>
          <Img
            height={product.thumbnail.height}
            sizes={product.thumbnail.sizes}
            backgroundColor={props => props.theme.colors.tertiary}
            />
          <div>{product.title}</div>
          
          </Link>
        </Product>
      ))}
    </List>
  )
}

export default ProductIconHeader