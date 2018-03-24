import styled from 'styled-components';

interface Props {
  src: string;
}

const GalleryWrapper = styled.div`
  width: 400px;
  height: 27.78vw;
  min-height: 400px;

  .image-container {
    position: absolute;
    background: url(${(props: Props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 444px;
    .btn {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 56px;
      width: 200px;

      bottom: 10%;
      left: 5%
      ;
      .text {
        color: #fff;        
      }
      .camera {
        color: #fff;
        height: 28px;
        width: 28px;
      }
    }

  }

`;

export default GalleryWrapper;