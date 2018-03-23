import * as React from 'react';
import RestrictionsWrapper from './Restrictions.wrapper';

interface Props {
  houseRules: string;
}

const Restritions = ({ houseRules }: Props) => (
  <RestrictionsWrapper>
    <h2> House Rules </h2>
    <div dangerouslySetInnerHTML={{ __html: houseRules }} />
  </RestrictionsWrapper>
);

export default Restritions;