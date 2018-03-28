import * as React from 'react';

import FooterWrapper from './Footer.wrapper';
import Svg from 'shared/Svg';
import Social from './Social';

interface Props {
  isMobile: boolean;
}

const Footer = ({ isMobile }: Props) => (
  <FooterWrapper>
    <div className="left-container">
      <Svg className="svg-container" src='logo-horizontal' />
      <div className="copyright">
        <div>&copy;The Bee Token 2017 All Rights Reserved</div>
      </div>
    </div>
    {!isMobile && <div className="right-container"><Social /></div>}
  </FooterWrapper>
);

export default Footer;
