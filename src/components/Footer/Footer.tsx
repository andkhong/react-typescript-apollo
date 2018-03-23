import * as React from 'react';
import { Link } from 'react-router-dom';

import FooterWrapper from './Footer.wrapper';
import Svg from 'shared/Svg';

const Footer = () => (
  <FooterWrapper>
    <div className="left-container">
      <Svg className="svg-container" src='logo-horizontal' />
      <div className="copyright">
        <div>&copy;The Bee Token 2017 All Rights Reserved</div>
      </div>
    </div>
    <div className="right-container">
      <Link to="/legal">Terms</Link>
      <Link to="/legal/privacy">Privacy</Link>
      <a href="https://medium.com/@thebeetoken">
        <Svg className="social-media-container" src="social/medium-circle" />
      </a>
      <a href="https://twitter.com/thebeetoken">
        <Svg className="social-media-container" src="social/twitter-circle" />
      </a>
      <a href="https://t.me/beetoken">
        <Svg className="social-media-container" src="social/telegram-circle" />
      </a>
      <a href="https://www.facebook.com/thebeetoken/">
        <Svg className="social-media-container" src="social/facebook-circle" />
      </a>
      <a href="https://www.instagram.com/thebeetoken/">
        <Svg className="social-media-container" src="social/instagram-circle" />
      </a>
      <a href="https://www.reddit.com/r/beetoken/">
        <Svg className="social-media-container" src="social/reddit-circle" />
      </a>
    </div>
  </FooterWrapper>
);

export default Footer;
