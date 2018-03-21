import * as React from 'react';

interface Props {
  src: string;
  className :string;
}

const Svg = ({ src, className }: Props) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ 
      __html: require(`assets/svg/${src}.svg`)
    }} 
  />
);

export default Svg;