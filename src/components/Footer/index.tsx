import * as React from 'react';
import { Link } from 'react-router-dom';

import FooterWrapper from 'styled/Wrappers/Footer';
import SVGWrapper from 'styled/SVGWrapper';
import RSVG from 'HOCs/RSVG';

import logo from "assets/svg/logo-horizontal.svg";
console.log('this is the logo', logo)

const Footer = () => (
  <FooterWrapper>
    <div className="left">
      <SVGWrapper>
        <RSVG svg={logo} />
      </SVGWrapper>
      <div className="copyright">
        <div>&copy;The Bee Token 2017 All Rights Reserved</div>
      </div>
    </div>
    <div className="right">
      <Link to="/legal">Terms</Link>
      <Link to="/legal/privacy">Privacy</Link>
      <a href="https://medium.com/@thebeetoken">Medium</a>
      <a href="https://twitter.com/thebeetoken">Twitter</a>
      <a href="https://t.me/beetoken">Telegram</a>
      <a href="https://www.facebook.com/thebeetoken/">Facebook</a>
      <a href="https://www.instagram.com/thebeetoken/">Instagram</a>
      <a href="https://www.reddit.com/r/beetoken/">Reddit</a>
    </div>
  </FooterWrapper>
);

export default Footer;
