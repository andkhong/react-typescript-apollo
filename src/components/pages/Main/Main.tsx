import * as React from 'react';
import MainWrapper from './Main.wrapper';

import Title from './Title';
import Listings from './Listings';

const Main = () => (
  <MainWrapper>
    <div className="title-container">
      <Title />
    </div>
    <div className="listing-container">
      <Listings />
    </div>
  </MainWrapper>
);

export default Main;