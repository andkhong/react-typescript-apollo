import * as React from 'react';

import MainWrapper from 'styled/Wrappers/Main';
import Title from './Title';
import Search from 'shared/Search';
import Listings from './Listings';

interface MainProps {
  listings: any;
}

const Main = ({ listings }: MainProps) => (
  <MainWrapper>
    {/* <Title /> */}
    {/* <Search /> */}
    {/* <Listings /> */}
  </MainWrapper>
);

export default Main;