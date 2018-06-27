import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import Headroom from 'react-headroom'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: .8em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      margin-left: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: 400;
    transition: all 0.2s;
  }
  img {
    height: 2em;
    width: auto;
  }
`

const activeLinkStyle = {
  color: 'LightGrey',
}

const Menu = () => {
  return (
    <Headroom>
    <Header>
      <Nav>
          <ul>
            <li>
              <Link to="/" exact activeStyle={activeLinkStyle}>
                <img src={logo} alt="Wright Mowers Logo"/>
              </Link>
            </li>
            <li>
              <Link to="/stand-on/" activeStyle={activeLinkStyle}>
                Stand
              </Link>
            </li>
            <li>
              <Link to="/walk-behind/" activeStyle={activeLinkStyle}>
                Ride
              </Link>
            </li>
            <li>
              <Link to="/zero-turn/" activeStyle={activeLinkStyle}>
                Walk
              </Link>
            </li>
            <li>
              <Link to="/accessories/" activeStyle={activeLinkStyle}>
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/parts-search/" activeStyle={activeLinkStyle}>
                Support
              </Link>
            </li>
            <li>
              <Link to="/find-dealer/" activeStyle={activeLinkStyle}>
                Retailers
              </Link>
            </li>
          </ul>
      </Nav>
    </Header>
    </Headroom>
  )
}

export default Menu
