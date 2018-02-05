import * as React from 'react';
import { Link } from 'react-router-dom';

import Svg from 'shared/Svg';
import HeaderWrapper from 'styled//Wrappers/Header';
import SVGWrapper from 'styled/Wrappers/SVG';

import Authorized from './Authorized/';
import Unauthorized from './Unauthorized/';

import { ModalProps } from 'components/Modals/Authentication/interface';
interface Props extends ModalProps {
  isAuth: boolean;
}

const Header = (props: any) => (
  <HeaderWrapper>
    <div className="left">
      <Link to="/">
        <SVGWrapper>
          <Svg src='logo-horizontal' />
        </SVGWrapper>
      </Link>
    </div>
    <div className="right">
      <Link to="/help"> Help </Link>
      {props.isAuth ? <Authorized /> : <Unauthorized {...props} />}
    </div>
  </HeaderWrapper>
);

export default Header;