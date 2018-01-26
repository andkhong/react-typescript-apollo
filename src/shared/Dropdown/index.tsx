import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  list: [
    {
      title: string,
      link: string
    }
  ]
}

interface State {
  isListVisible: boolean;
}

class Dropdown extends React.Component<Props, State> {
  state = { isListVisible: false }

  toggleDropDownMenu = () => this.setState({ isListVisible: !this.state.isListVisible })
  
  mapListToMenu = () => (
    this.props.list.map((item: any, index: number) => (
      <div key={index}>
        <Link to="item.link">Yarp</Link>
      </div>
    ))
  )
  
  render() {
    return (
      <div onClick={this.toggleDropDownMenu}>
        {this.state.isListVisible && this.mapListToMenu()}
      </div>
    );
  }
}

export default Dropdown;