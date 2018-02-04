import * as React from 'react';

interface Props {
  img: any;
}

const Img = ({ img }: Props) => (
  <img src={require(`assets/img/${img}`) } />
);

export default Img;