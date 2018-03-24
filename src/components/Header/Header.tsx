import * as React from 'react';
import { Link } from 'react-router-dom';
import HeaderWrapper from './Header.wrapper';
import Authorized from './Authorized/';
import Unauthorized from './Unauthorized/';
import Svg from 'shared/Svg';
import { isStorageValid } from 'utils/isStorageValid';

interface Props {
  toggleAuthForms: (form: string) => void;
}

interface State {
  isTop: boolean;
}

class Header extends React.Component<Props, State> {
  state = {
    isTop: true
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 425;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }  
  render() {
    return (
      <HeaderWrapper isTop={this.state.isTop}>
        <div className="left-container">
          <Link to="/">
            <Svg className="svg-container" src='logo-horizontal' />
          </Link>
        </div>
        <div className="right-container">
          {isStorageValid('bee-token') ? <Authorized client /> : <Unauthorized {...this.props} />}
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header;