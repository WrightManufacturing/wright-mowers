import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import wolf from '../images/wolf.svg'
import youtube from '../images/youtube.svg'


const Wrapper = styled.footer`
  color: ${props => props.theme.colors.base};
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  margin-bottom: 2rem;
  max-width: ${props => props.theme.sizes.maxWidth};
  /* @media (max-width: ${props => props.theme.responsive.small}) {
    justify-content: flex-start;
  } */
`

const List = styled.ul`
  margin: 1rem;
  margin-bottom: 0rem;
  padding-top: .5em;
  padding-left: .5em;
  padding-bottom: 0em;
  img {
    display: inline;
    margin-right: 1.5rem;
    width: auto;
    height: 1.5em;
    &:hover {
      opacity: .8;
    }
  }

`

const Item = styled.li`
  display: block;
  margin-bottom: 1.5em;
  width: auto;

  div {
    font-size: 1.5rem;
    font-weight: 500;
    /* padding-bottom: .4rem; */
    /* border-bottom: 2px solid ${props => props.theme.colors.base}; */
  }

  a {
    font-weight: 500;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 5px 0px;
    padding: .25em .75em;
    &:hover {
      color: black;
      background-color: #d1d1d1;
    }
  }
`

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2em;
  a, span {
    display: inline-block;
    color: ${props => props.theme.colors.base};
    margin-top: 1rem;
    padding: 0rem 1rem;
    text-decoration: none;
    white-space:nowrap;
    &:not(:last-child) {
      border-right: 1px solid ${props => props.theme.colors.base};
    }
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`

const Footer = () => (
<div style={{backgroundColor: '#e9e9e9'}}>
<Wrapper>

<List>
  <Item>
    <div>Company</div>
  </Item>
  <Item>
    <Link to="/support/" >
      Support ⚙️
    </Link>
  </Item>
  <Item>
    <Link to="/articles/" >
      Articles 📃
    </Link>
  </Item>
  <Item>
    <Link to="/contact/" >
      Contact ✉️
    </Link>
  </Item>
  <Item>
    <Link to="/about/" >
      About ℹ
    </Link>
  </Item>
  <Item>
    <Link to="/careers/" >
      Careers 💼
    </Link>
  </Item>
  <Item>
    <a href="https://purchase.wrightmfg.com/" target="_blank" >Dealer & Distributor</a>
  </Item>
</List>

<List>
  <Item>
    <div>Products</div>
  </Item>
  <Item>
    <Link to="/compare/" >
      Compare
    </Link>
  </Item>
  <Item>
    <Link to="/stand-on/" >
      Stand On
    </Link>
  </Item>
  <Item>
    <Link to="/walk-behind/" >
      Walk Behind
    </Link>
  </Item>
  <Item>
    <Link to="/zero-turn/" >
      Zero Turn
    </Link>
  </Item>
  <Item>
    <Link to="/accessories/" >
      Accessories
    </Link>
  </Item>
  <Item>
    <a href="http://apparel.wrightmfg.com/" target="_blank" >Apparel</a>
  </Item>
</List>


<List>
  <Item>
    <div>Buy</div>
  </Item>
  <Item>
    <Link to="/find-dealer/" >
      Find Dealer
    </Link>
  </Item>
  <Item>
    <Link to="/contact/" >
      Demo A Wright
    </Link>
  </Item>
  <Item>
    <a href="https://store.wrightmfg.com/" target="_blank" >
      Online Store
    </a>
  </Item>
</List>

<List>
  <Item>
    <div>Social</div>
  </Item>
  <a href="https://www.instagram.com/wright_mowers/" target="_blank" >
    <img src={instagram} alt=""/>
  </a>

  <a href="https://www.youtube.com/user/WrightMowers" target="_blank" >
    <img src={youtube} alt=""/>
  </a>

  <a href="https://www.facebook.com/wrightcommercialproducts" target="_blank" >
    <img src={facebook} alt=""/>
  </a>

  <a href="https://twitter.com/wrightmowers" target="_blank" >
    <img src={twitter} alt=""/>
  </a>

  <a href="https://wolf.wrightmfg.com/" target="_blank" >
    <img src={wolf} alt=""/>
  </a>
</List>

  <Copyright>
    <span>Wright Manufacturing, Inc. © 2018</span>
    <Link to="/privacy-policy/" >
      Privacy Policy
    </Link>
    <Link to="/trademarks/" >
      Trademarks
    </Link>
    <Link to="/contact/" >
      Contact
    </Link>
  </Copyright>


</Wrapper>




</div>
)

export default Footer


