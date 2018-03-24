import * as React from 'react';

import FooterWrapper from './Footer.wrapper';
import Svg from 'shared/Svg';
import Social from './Social';

class Footer extends React.Component {
  state = {
    isMobile: true
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      const isMobile = window.innerWidth > 768;
      if (isMobile !== this.state.isMobile) {
        this.setState({ isMobile });
      }
    });
  }
  render() {
    return (
      <FooterWrapper>
        <div className="left-container">
          <Svg className="svg-container" src='logo-horizontal' />
          <div className="copyright">
            <div>&copy;The Bee Token 2017 All Rights Reserved</div>
          </div>
        </div>
        {this.state.isMobile && 
          <div className="right-container">
            <Social />
          </div>
        }
      </FooterWrapper>
    );
  }
}

export default Footer;
