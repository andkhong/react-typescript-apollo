import * as React from 'react';

interface Props {
  img: any;
}

const Img = ({ img }: Props) => (
  <span dangerouslySetInnerHTML={{ __html: require(`assets/img/${img}`) }} />
);

export default Img;