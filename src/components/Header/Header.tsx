import * as React from 'react';
import { Link } from 'react-router-dom';
import HeaderWrapper from './Header.wrapper';
import Authorized from './Authorized/';
import Unauthorized from './Unauthorized/';
import Svg from 'shared/Svg';
import { isStorageValid } from 'utils/isStorageValid';

const Header = (props: any) => (
  <HeaderWrapper>
    <div className="left-container">
      <Link to="/">
        <Svg className="svg-container" src='logo-horizontal' />
      </Link>
    </div>
    <div className="right-container">
      {isStorageValid('bee-token') ? <Authorized {...props} /> : <Unauthorized {...props} />}
    </div>
  </HeaderWrapper>
);

export default Header;