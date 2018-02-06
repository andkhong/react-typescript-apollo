import styled from 'styled-components';

interface Props {
  fill: string;
}

const SVGWrapper = styled.div`
  .blue {
    svg {
      width: 200px;
      path {
        fill: ${(props: Props) => props.fill}
      }
    }    
  }
  .cars {
    svg {
      width: 200px;
      path {
        fill: ${(props: Props) => props.fill}
      }
    }   
  }
`;


export default SVGWrapper;