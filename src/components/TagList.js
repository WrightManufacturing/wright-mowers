import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-top: solid 2px ${props => props.theme.colors.secondary};
  border-bottom: solid 2px ${props => props.theme.colors.secondary};
  @media (max-width: ${props => props.theme.responsive.small}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Tag = styled.li`
  margin: 1rem .25rem auto .25rem;
  &:first-child {
    font-weight: 600;
  }
  a {
    transition: 0.2s;
    background: ${props => props.theme.colors.tertiary};
    padding: .2rem .4rem;
    border-radius: 2px;
    text-transform: capitalize;
    color: ${props => props.theme.colors.base};
    border-radius: 5px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      background: ${props => props.theme.colors.secondary};
    }
  }
`

const TagList = props => {
  return (
    <List>
      <Tag>Categories:</Tag>
      {props.tags.map(tag => (
        <Tag key={tag.title}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
