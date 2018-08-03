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
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  margin-bottom: 2rem;
  max-width: ${props => props.theme.sizes.maxWidth};
  @media (max-width: ${props => props.theme.responsive.small}) {
    justify-content: flex-start;
  }
`

const List = styled.ul`
  margin: 1.5rem 1rem 0rem 1rem;
  padding: .5rem auto 0rem .5rem;
`

const Item = styled.li`
  display: block;
  margin-bottom: 1.5em;
  div {
    font-size: 1.5rem;
    font-weight: 500;
  }

  a {
    font-weight: 500;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 3px;
    padding: .25em .75em;
    &:hover {
      text-decoration: underline;
    }
  }
`

const SocialIcon = styled.img`
  margin-right: 1.5rem;
  width: auto;
  height: 1.5em;
  &:hover {
    opacity: .8;
  }
`

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  a, span {
    display: inline-block;
    color: ${props => props.theme.colors.base};
    margin-top: 2rem;
    padding: 0rem 1rem;
    text-decoration: none;
    white-space:nowrap;
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
      About
    </Link>
  </Item>
  <Item>
    <Link to="/marketing-assets/" >
      Marketing Assets
    </Link>
  </Item>
  <Item>
    <a href="https://www.indeedjobs.com/wright-manufacturing-inc/_hl/en_US" target="_blank" rel='noopener noreferrer'>Careers</a>
  </Item>
  <Item>
    <a href="https://purchase.wrightmfg.com/" target="_blank" rel='noopener noreferrer'>Dealer & Distributor</a>
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
    <a href="http://apparel.wrightmfg.com/" target="_blank" rel='noopener noreferrer'>Apparel</a>
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
    <Link to="/demo-a-wright/" >
      Demo A Wright
    </Link>
  </Item>
  <Item>
    <a href="https://store.wrightmfg.com/" target="_blank" rel='noopener noreferrer'>
      Online Store
    </a>
  </Item>
</List>

<Copyright>
  

  <a href="https://www.youtube.com/user/WrightMowers" target="_blank" rel='noopener noreferrer'>
    <SocialIcon src={youtube} alt="youtube"/>
  </a>

  <a href="https://www.instagram.com/wright_mowers/" target="_blank" rel='noopener noreferrer' >
    <SocialIcon src={instagram} alt="instagram"/>
  </a>

  <a href="https://www.facebook.com/wrightcommercialproducts" target="_blank" rel='noopener noreferrer'>
    <SocialIcon src={facebook} alt="facebook"/>
  </a>

  <a href="https://twitter.com/wrightmowers" target="_blank" rel='noopener noreferrer'>
    <SocialIcon src={twitter} alt="twitter"/>
  </a>

  <a href="https://wolf.wrightmfg.com/" target="_blank" rel='noopener noreferrer'>
    <SocialIcon src={wolf} alt="wolf loyalty owners group"/>
  </a>
</Copyright>

<Copyright style={{opacity: '.5'}}>
    <span style={{whiteSpace: 'normal'}}>Copyright © 2018 Wright Manufacturing, Inc. </span>
    <Link to="/privacy-policy/" >
      Privacy Policy
    </Link>
    <Link to="/trademarks/" >
      Trademarks
    </Link>
</Copyright>


</Wrapper>




</div>
)

export default Footer


