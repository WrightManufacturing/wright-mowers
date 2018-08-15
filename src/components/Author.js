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
  background: ${props => props.theme.colors.tertiary};
  border-radius: 0px 5px 5px 0px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background .1s;
  &:after {
    content: "i";
    background: white;
    margin-left: .3rem;
    padding-right: .5rem;
    padding-left: .5rem;
    text-align: center;
    border-radius: 1rem;
  }
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }


`
const Bio = styled.p`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: auto;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.base};
  background: ${props => props.theme.colors.tertiary};
  padding: 1rem;
  line-height: 1.25rem;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.14), 0 3px 5px rgba(0,0,0,0.2);
`

const AuthorPic = styled(Img)`
  width: 48px;
  height: 48px;
  margin-right: -24px;
  border-radius: 24px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.14), 0 3px 5px rgba(0,0,0,0.2);
`

class Author extends React.Component {  
  state={showBio: false}
  render() {
    const author = this.props.author
    return (
      <div>
        <Wrapper>
          <AuthorPic sizes={author.profilePicture.sizes} backgroundColor={'#eeeeee'} />
          <Name onClick={() => 
            this.state.showBio === false ? this.setState({showBio: true}) : this.setState({showBio: false})
          }>{author.name}</Name>
          
        </Wrapper>
          {this.state.showBio && <Bio>{author.biography.internal.content}</Bio> }

      </div>
    )
  }
}

export default Author