import styled from 'styled-components';

const Button = styled.div`
  button {
    background: #ffc107;
    color: #263238;
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
  
    &:disabled {
        opacity: .5;
    }
  }
`;

export default Button;