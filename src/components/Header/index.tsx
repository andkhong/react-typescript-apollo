import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import RSVG from 'HOCs/RSVG';
import HeaderWrapper from 'styled//Wrappers/Header';
import SVGWrapper from 'styled/SVGWrapper';
import Logo from "assets/svg/logo-horizontal.svg";

import Authorized from './Authorized/';
import Unauthorized from './Unauthorized/';

// Pass in isAuth, User Name, Sign Out Props
const Header = (props: any) => (
  <HeaderWrapper>
    <div className="left">
      <Link to="/">
        <SVGWrapper>
          <RSVG svg={Logo} />
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