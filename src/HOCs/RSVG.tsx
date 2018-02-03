import * as React from 'react';

interface Props {
  svg: string;
}

const RSVG = ({ svg }: Props) => (
  <span dangerouslySetInnerHTML={{ __html: svg }} />
);

export default RSVG;