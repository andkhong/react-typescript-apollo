import * as React from 'react';

interface Props {
  svgText: string;
}

const RSVG = ({ svgText }: Props) => (
  <span
    dangerouslySetInnerHTML={{ __html: svgText }}
  />
);

export default RSVG;