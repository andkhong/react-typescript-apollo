import * as React from 'react';

interface Props {
  img: string;
}

const Img = ({ img }: Props) => (
  <img src={require(`assets/img/${img}`)} />
);

export default Img;