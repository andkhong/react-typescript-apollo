import * as React from 'react';

interface Props {
  src: string;
}

const Img = ({ src }: Props) => (
  <img src={require(`../assets/img/${src}`)} />
);

export default Img;