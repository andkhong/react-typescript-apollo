import * as React from 'react';
import { Link } from 'react-router-dom';
import SocialWrapper from './Social.wrapper';
import Svg from 'shared/Svg';

const Social = () => (
  <SocialWrapper>
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
  </SocialWrapper>
);

export default Social;