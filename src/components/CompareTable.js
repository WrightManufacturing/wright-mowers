import styled from 'styled-components'

const CompareTable = styled.table`
  white-space:nowrap;

  
  tbody {
    
  }
  th {
    text-align: left;
    padding: .5rem .6rem;
    color: ${props => props.theme.colors.base};
    background-color: ${props => props.theme.colors.secondary};
    border: 2px solid ${props => props.theme.colors.secondary};
    border-right: solid white -3px;
    font-weight: 500;
    font-size: 1.1rem;
  }
  tr {
    transition: all 0.1s;
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
  td {
    padding: .5rem .6rem;
    border: 2px solid ${props => props.theme.colors.secondary};
  }
  span {
    color: green;
  }
`
export default CompareTable