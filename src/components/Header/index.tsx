import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import HeaderWrapper from 'styled//Wrappers/Header';
import Authorized from './Authorized/';
import Unauthorized from './Unauthorized/';
const logo = require("assets/svg/logo-horizontal.svg");

// Pass in isAuth, User Name, Sign Out Props
const Header = (props: any) => (
    <HeaderWrapper>
        <div className="left">
            <Link to="/"><img src={logo} /></Link>
        </div>
        <div className="right">
            <Link to="/help"> Help </Link>
            {props.isAuth ? <Authorized {...props} /> : <Unauthorized {...props} />}
        </div>
    </HeaderWrapper>
);

export default withRouter(Header);