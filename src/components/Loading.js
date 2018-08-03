import styled, {keyframes} from 'styled-components'

const rotate360 = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const Loading = styled.div`
  display: block;
  margin: auto;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.colors.highlight};
  border-color: ${props => props.theme.colors.highlight} transparent ${props => props.theme.colors.highlight} transparent;
  animation: ${rotate360} 1.2s linear infinite;
`

export default Loading