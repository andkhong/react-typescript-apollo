import styled from 'styled-components';

const AuthenticationModalWrapper = styled.div`
  .background-container {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  .form-container {
    position: absolute;
    top: 40%;
    left: 50%;
    margin: -100px 0 0 -150px;
    z-index: 999;
    height: 300px;
    width: 300px;
    background-color: white;
  }
`;

export default AuthenticationModalWrapper;