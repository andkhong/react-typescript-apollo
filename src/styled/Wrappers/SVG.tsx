import styled from 'styled-components';

interface Props {
  fill: string;
}

const SVGWrapper = styled.div`
  svg {
    width: 200px;
    path {
      fill: ${(props: Props) => props.fill}
    }
  }    
`;


export default SVGWrapper;