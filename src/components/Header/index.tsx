import * as React from 'react';
import { Link } from 'react-router-dom';

import HeaderWrapper from 'styled/Wrappers/Header';
import SVGWrapper from 'styled/Wrappers/SVG';

import Authorized from './Authorized/';
import Unauthorized from './Unauthorized/';

import Svg from 'shared/Svg';
import { isStorageValid } from 'utils/isStorageValid';

const Header = (props: any) => (
  <HeaderWrapper>
    <div className="left">
      <Link to="/">
        <SVGWrapper fill='green'>
          <Svg src='logo-horizontal' />
        </SVGWrapper>
      </Link>
    </div>
    <div className="right">
      {isStorageValid('bee-token') ? <Authorized {...props} /> : <Unauthorized {...props} />}
    </div>
  </HeaderWrapper>
);

export default Header;