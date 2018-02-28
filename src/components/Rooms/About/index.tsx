import * as React from 'react';
const cooper = require('assets/img/cooper.jpg');

interface Props {
  hostAbout: string;
  hostFirstName: string;
  hostPic: string;
};

const About = ({ hostAbout, hostFirstName, hostPic }: Props) => (
  <div>
    <h2> About {hostFirstName} </h2>
    <h5> Joined since September 2017 </h5>
    <div>
      <img style={{ width: '90px', height: '90px', borderRadius: '50%' }} src={hostPic || cooper} />
    </div>
    <div dangerouslySetInnerHTML={createMarkup(hostAbout)} />
  </div>
);

export default About;

function createMarkup(text: string) {
  return {__html: text};
}
