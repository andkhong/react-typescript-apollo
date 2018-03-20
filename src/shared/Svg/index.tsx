import * as React from 'react';

interface Props {
  src: string;
}

const Svg = ({ src }: Props) => (
  <div 
    dangerouslySetInnerHTML={{ 
      __html: require(`assets/svg/${src}.svg`)
    }} 
  />
);

export default Svg;