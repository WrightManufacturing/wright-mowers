import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const HeaderFullWidth = styled.div`
  background: ${props => props.theme.colors.base};
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
`

const Header = styled.header`
  max-width: ${props => props.theme.sizes.maxWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  img {
    height: 2em;
    width: auto;
    margin: 0em .6em;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;

  a {
    text-decoration: none;
    color: white;
    font-weight: 400;
    transition: all 0.2s;
    padding: 1em .5em;
    display: block;
  }

  @media (max-width: ${props => props.theme.responsive.small}) {
    mask-image: -webkit-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    mask-image: -moz-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    mask-image: linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    -webkit-mask-image: -webkit-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    -webkit-mask-image: -moz-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    overflow: auto;
    white-space: nowrap;
  }
`

const activeLinkStyle = {
  color: 'LightGrey'
}

const Menu = () => {
  return (
      <HeaderFullWidth>
        <Header>
          <Link to="/" exact activeStyle={activeLinkStyle}>
            <img src={logo} alt="Wright Mowers Logo"/>
          </Link>
          <Nav>
            <Link to="/stand-on/" activeStyle={activeLinkStyle}>
              Stand
            </Link>
            <Link to="/walk-behind/" activeStyle={activeLinkStyle}>
              Walk
            </Link>
            <Link to="/zero-turn/" activeStyle={activeLinkStyle}>
              Ride
            </Link>
            <Link to="/accessories/" activeStyle={activeLinkStyle}>
              Accessories
            </Link>
            <Link to="/support/" activeStyle={activeLinkStyle}>
              Support
            </Link>
            <Link to="/find-dealer/" activeStyle={activeLinkStyle}>
              Find Dealer
            </Link>
          </Nav>
        </Header>
      </HeaderFullWidth>
  )
}

export default Menu
