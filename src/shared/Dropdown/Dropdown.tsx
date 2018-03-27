import * as React from 'react';
import DropdownWrapper from './Dropdown.wrapper';

class Dropdown extends React.Component {



  render() {
    return (
      <DropdownWrapper>
        <div className="dropdown">
          <span>Mouse over me</span>
          <div className="dropdown-content">
            <p>Hello World!</p>
          </div>
        </div>
      </DropdownWrapper>
    )
  }
};

export default Dropdown;