import * as React from 'react';
const cooper = require('assets/img/cooper.jpg');

interface Props {
  description: string;
  hostFirstName: string;
  hostPic: string;
}

const Host = ({ description, hostFirstName, hostPic }: Props) => (
  <div>
    <div>
      <img style={{ width: '90px', height: '90px', borderRadius: '50%' }} src={hostPic || cooper} />
    </div>
    <div>
      {hostFirstName}: "Welcome to my home!"
    </div>
    <div>
      <h2> About {hostFirstName}'s Home </h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  
  </div>
);

export default Host;