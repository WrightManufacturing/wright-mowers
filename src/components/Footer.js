import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 1em;
  max-width: ${props => props.theme.sizes.maxWidth};
  border-top: 2px solid ${props => props.theme.colors.base};
`

const List = styled.ul`
  margin: 1em;
  padding-top: .5em;
  padding-left: .5em;
  padding-bottom: 0em;
  border-left: 2px solid ${props => props.theme.colors.secondary};

`

const Item = styled.li`
  display: block;
  width: 100%;
  margin-bottom: 1.2em;
  width: auto;

  div {
    font-size: 1.5em;
    font-weight: 600;

  }

  a {
    font-weight: 500;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 5px;
    padding: .25em .75em;
    &:hover {
      color: black;
      background-color: #d1d1d1;
    }
  }
`

const Footer = () => (
  <Wrapper>

    <List>
      <Item>
        <div>Company</div>
      </Item>
      <Item>
        <Link to="/support/" >
          Support
        </Link>
      </Item>
      <Item>
        <Link to="/contact/" >
          Contact
        </Link>
      </Item>
      <Item>
        <Link to="/articles/" >
          Articles
        </Link>
      </Item>
      <Item>
        <Link to="/about/" >
          About
        </Link>
      </Item>
      <Item>
        <Link to="/about/" >
          Careers
        </Link>
      </Item>
      <Item>
        <a href="https://purchase.wrightmfg.com/">Dealer & Distributor</a>
      </Item>
    </List>
    
    <List>
      <Item>
        <div>Products</div>
      </Item>
      <Item>
        <Link to="/stand-on/" >
          Stand
        </Link>
      </Item>
      <Item>
        <Link to="/walk-behind/" >
          Walk
        </Link>
      </Item>
      <Item>
        <Link to="/zero-turn/" >
          Ride
        </Link>
      </Item>
      <Item>
        <Link to="/accessories/" >
          Accessories
        </Link>
      </Item>
      <Item>
        <a href="http://apparel.wrightmfg.com/">Apparel</a>
      </Item>
    </List>


    <List>
      <Item>
        <div>Buy</div>
      </Item>
      <Item>
        <Link to="https://store.wrightmfg.com/" >
          Online Store
        </Link>
      </Item>
      <Item>
        <Link to="/pricing/" >
          Pricing
        </Link>
      </Item>
      <Item>
        <Link to="/demo/" >
          Demo A Wright
        </Link>
      </Item>
      <Item>
        <Link to="/find-dealer/" >
          Find Dealer
        </Link>
      </Item>
    </List>

    <List>
      <Item>
        <div>Social</div>
      </Item>
      <Item>
        <a href="https://www.instagram.com/wright_mowers/">Instagram</a>
      </Item>
      <Item>
        <a href="https://www.youtube.com/user/WrightMowers">YouTube</a>
      </Item>
      <Item>
        <a href="https://www.facebook.com/wrightcommercialproducts">Facebook</a>
      </Item>
      <Item>
        <a href="https://twitter.com/wrightmowers">Twitter</a>
      </Item>
      <Item>
        <a href="https://wolf.wrightmfg.com/">Wright Owners Forum</a>
      </Item>
    </List>


    {/* <div>
      <div>
        Wright Manufacturing, Inc. © 2018
      </div>
      <Link to="/" >
        Privacy Policy
      </Link>
      <Link to="/" >
        Trademarks
      </Link>
    </div> */}

  </Wrapper>
)

export default Footer


