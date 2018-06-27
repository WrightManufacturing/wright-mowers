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
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    
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
  @media (max-width: ${props => props.theme.responsive.small}) {
    ul {
      mask-image: -webkit-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
      mask-image: -moz-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
      mask-image: linear-gradient(to right, transparent, black 15px, black 90%, transparent);
      -webkit-mask-image: -webkit-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
      -webkit-mask-image: -moz-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 15px, black 90%, transparent);
      overflow: auto;
      white-space: nowrap;
      width: 100%;
      padding: 0em .6em;
    }

    img {
      margin-left: -.75em;
      margin-right: .5em;
    }
    

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

          <Link to="/" exact activeStyle={activeLinkStyle}>
            <img src={logo} alt="Wright Mowers Logo"/>
          </Link>

          <ul>
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
