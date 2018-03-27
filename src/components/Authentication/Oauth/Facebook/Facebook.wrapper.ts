import styled from 'styled-components';

const FacebookWrapper = styled.div`
  button {
    background: #3b5998;
    color: #fff;
    height: 100%;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    border-radius: 48px;
    border: 0;
    outline: 0;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: all 0.35s ease-in-out;
  
    &:disabled {
      opacity: .5;
    }
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default FacebookWrapper;