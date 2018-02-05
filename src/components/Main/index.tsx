import * as React from 'react';
import { Link } from 'react-router-dom';

import MainWrapper from 'styled/Wrappers/Main';

// import Title from './Title';
// import Search from 'shared/Search';
// import Listings from './Listings';

const Main = () => (
  <MainWrapper>
    <Link to={`/rooms/${123}`}> Click </Link>
    {/* <Title /> */}
    {/* <Search /> */}
    {/* <Listings /> */}
  </MainWrapper>
);

export default Main;