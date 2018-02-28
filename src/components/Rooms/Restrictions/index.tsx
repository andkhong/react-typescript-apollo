import * as React from 'react';

interface Props {
  houseRules: string;
}

const Restritions = ({ houseRules }: Props) => (
  <div>
    <h2> House Rules </h2>
    <div dangerouslySetInnerHTML={createMarkup(houseRules)} />
  </div>
);

function createMarkup(text: string) {
  return {__html: text};
}

export default Restritions;