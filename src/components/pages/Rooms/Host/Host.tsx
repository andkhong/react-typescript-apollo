import * as React from 'react';
import HostWrapper from './Host.wrapper'

interface Props {
  description: string;
  hostFirstName: string;
  hostPic: string;
}

const Host = ({ description, hostFirstName, hostPic }: Props) => (
  <HostWrapper>
    <div>
      <img 
        style={{ width: '90px', height: '90px', borderRadius: '50%' }}
        src={hostPic || require('assets/img/cooper.jpg')}
      />
    </div>
    <div>{hostFirstName}: "Welcome to my home!"</div>
    <div>
      <h2> About {hostFirstName}'s Home </h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </HostWrapper>
);

export default Host;