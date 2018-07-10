import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import Headroom from 'react-headroom'

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
  padding: 0em .7em;
  margin-right: 0;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.highlight};
    transition: all 0.2s;
    padding: 1em .6em;
    display: block;
    white-space:nowrap;
    &:hover {
      box-shadow: 0 0px,0 -2px ${props => props.theme.colors.highlight} inset, 0px 0, 0px 0;
    }
  }

  @media (max-width: ${props => props.theme.responsive.small}) {
    mask-image: -webkit-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    mask-image: -moz-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    mask-image: linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    -webkit-mask-image: -webkit-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    -webkit-mask-image: -moz-linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 15px, black 90%, transparent);
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }
`

const activeLinkStyle = {
  boxShadow: '0 0px,0 -2px #fdbb2d inset, 0px 0, 0px 0'
}

const Menu = () => {
  return (
    <div>
      <HeaderFullWidth>
        <Header>
          <Link to="/" exact>
            <img src={logo} alt="Wright Mowers Logo"/>
          </Link>
          <Nav>
            <Link to="/stand-on/" activeStyle={activeLinkStyle}>
              Stand On
            </Link>
            <Link to="/walk-behind/" activeStyle={activeLinkStyle}>
              Walk Behind
            </Link>
            <Link to="/zero-turn/" activeStyle={activeLinkStyle}>
              Zero Turn
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
      <div style={{ height: '48px' }} ></div>
    </div>
  )
}

export default Menu
