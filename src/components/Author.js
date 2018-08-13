import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image' 

const Wrapper = styled.div`
  margin: 0 auto 1em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  display: flex;
  align-items: center;
`
 
const Name = styled.span`
  color: ${props => props.theme.colors.base};
  padding: .5rem;
  padding-left: 2rem;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: 0px 5px 5px 0px;
`
const Bio = styled.p`
  color: ${props => props.theme.colors.base};
  display: none;
  :hover {
    display: block;
  }
`

const AuthorPic = styled(Img)`
  width: 48px;
  height: 48px;
  margin-right: -24px;
  border-radius: 24px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.14), 0 3px 5px rgba(0,0,0,0.2);
`

const Author = ({author}) => {
  console.log(author)
  return (
    <Wrapper>
        <AuthorPic sizes={author.profilePicture.sizes} backgroundColor={'#eeeeee'} />
        <Name>{author.name}</Name>
        <Bio>{author.biography.internal.content}</Bio>
    </Wrapper>
  )
}

export default Author