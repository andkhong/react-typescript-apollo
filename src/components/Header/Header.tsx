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
  handleHeader = () => {
    const isTop = window.scrollY < 2;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleHeader.bind(this));
  }
  componentWillMount() {
    document.removeEventListener('scroll', () => {});
  }
  render() {
    const specialHeader: boolean = (location.pathname === '/') && this.state.isTop;
    return (
      <HeaderWrapper isTop={specialHeader}>
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