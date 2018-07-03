import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import wolf from '../images/wolf.svg'
import youtube from '../images/youtube.svg'


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
  img {
    display: inline;
    margin: .8em;
    width: auto;
    height: 1.5em;
    &:hover {
      opacity: .8;
    }
  }
  hr {
    margin-bottom: 1.2em;
    width: auto;
    height: 0px;
    border: none;
    border-top: 1px solid ${props => props.theme.colors.secondary};
  }
`

const Item = styled.li`
  display: block;
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
          Careers 👨‍💼
        </Link>
      </Item>
      <Item>
        <a href="https://purchase.wrightmfg.com/" target="_blank" >Dealer & Distributor 🔗</a>
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
      <hr/>
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


