import * as React from 'react';

interface Props {
  svg: any;
}

const Svg = ({ svg }: Props) => (
  <span dangerouslySetInnerHTML={{ __html: require(`assets/svg/${svg}`) }} />
);

export default Svg;