import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 1.5em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  border-bottom: solid 1px ${props => props.theme.colors.base};
  padding-bottom: 1rem;
`


const Date = styled.p`
  display: inline-block;
  span {
    font-weight: 500;
  }
`

const PostDate = props => {
  return (
    <Wrapper>
      <Date>
        <span>Published:</span> {props.date}
      </Date>
    </Wrapper>
  )
}

export default PostDate
