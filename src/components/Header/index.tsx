import * as React from 'react';
import { Link } from 'react-router-dom';

import Authorized from './Authorized/';
import Unauthorized from './Unauthorized/';

import Svg from 'shared/Svg';
import HeaderWrapper from 'styled/Wrappers/Header';
import SVGWrapper from 'styled/Wrappers/SVG';

const Header = (props: any) => (
  <HeaderWrapper>
    <div className="left">
      <Link to="/">
        <SVGWrapper fill='green'>
        <div className="apple">
          <Svg src='logo-horizontal' />
        </div>
        </SVGWrapper>
      </Link>
    </div>
    <div className="right">
      <Link to="/help"> Help </Link>
      {false ? <Authorized {...props} /> : <Unauthorized {...props} />}
    </div>
  </HeaderWrapper>
);

export default Header;