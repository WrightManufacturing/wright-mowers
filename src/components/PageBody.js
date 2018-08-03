import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.highlight};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  li {
    text-indent: -1.3em;
    padding-left: 1em;
    margin-bottom: .5rem;
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }

  table {
    margin-bottom: 1rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 5px;
  }

  tr {
    border-bottom: 1px solid ${props => props.theme.colors.base};
    &:last-child {
      border-bottom: none;
      td {
        &:first-child {
          border-bottom-left-radius: 5px;
        }
        &:last-child {
          border-bottom-right-radius: 5px;
        }
      }
      
    }
  }

  th, td {
    border-right: 1px solid ${props => props.theme.colors.base};
    &:last-child {
      border-right: none;
    }
  }

  th {
    padding: .6em 1rem;
    font-weight: 500;
    background-color: ${props => props.theme.colors.highlight};
    &:first-child {
      border-top-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
    }
  }
  td {
    padding: .5em;
    color: ${props => props.theme.colors.base};
    background-color: ${props => props.theme.colors.tertiary};
  }

  img {
    /* border-radius: .3em; */
  }

`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
