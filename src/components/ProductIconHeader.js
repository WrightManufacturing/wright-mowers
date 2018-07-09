import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 1rem;
  overflow-x: auto;
`

const Product = styled.li`

  margin: 0rem 1.2rem 1.2rem 1.2rem;
  height: 5em;

  img {
    width: 4em;
    margin: 1rem auto;
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
          
          { product.icon && <img src={product.icon.file.url} alt={product.title}/>}
          {product.title}
          </Link>
        </Product>
      ))}
    </List>
  )
}

export default ProductIconHeader