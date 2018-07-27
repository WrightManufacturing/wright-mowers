import React from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'

const SubTitle = styled.h2`
  font-size: ${props => (props.small ? '1.8em' : '2.5em')};
  text-transform: capitalize;
  font-weight: 500;
  text-align: center;
  margin: 0 0 2rem 0;
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const Index = () => {
  return (
    <div>
      <SEO />
      <Container>
        <SubTitle>The Future Of Mowing.</SubTitle>
        <PageTitle small >Stander ZK Gen 2</PageTitle>

      </Container>
    </div>
  )
}

export default Index