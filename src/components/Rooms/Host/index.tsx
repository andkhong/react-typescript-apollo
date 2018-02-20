import * as React from 'react';

interface Props {
    hostFirstName: string;
}

const Host = ({ hostFirstName }: Props) => (
  <div>
    {hostFirstName}
  </div>
);

export default Host;