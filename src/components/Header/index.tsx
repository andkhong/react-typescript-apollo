import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Svg from 'HOCs/Svg';
import HeaderWrapper from 'styled//Wrappers/Header';
import SVGWrapper from 'styled/Wrappers/SVG';

import Authorized from './Authorized/';
import Unauthorized from './Unauthorized/';

// Pass in isAuth, User Name, Sign Out Props
const Header = (props: any) => (
  <HeaderWrapper>
    <div className="left">
      <Link to="/">
        <SVGWrapper>
          <Svg svg={'logo-horizontal.svg'} />
        </SVGWrapper>
      </Link>
    </div>
    <div className="right">
      <Link to="/help"> Help </Link>
      {props.isAuth ? <Authorized {...props} /> : <Unauthorized {...props} />}
    </div>
  </HeaderWrapper>
);

export default withRouter(Header);