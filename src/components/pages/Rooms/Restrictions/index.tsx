import * as React from 'react';

interface Props {
  houseRules: string;
}

const Restritions = ({ houseRules }: Props) => (
  <div>
    <h2> House Rules </h2>
    <div dangerouslySetInnerHTML={{ __html: houseRules }} />
  </div>
);

export default Restritions;