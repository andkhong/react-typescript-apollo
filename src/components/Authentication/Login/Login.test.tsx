import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Login from './Login';

describe('<Login />', () => {
  it('renders Login', () => {
    const component = shallow(<Login />);
    expect(component).to.have.length(1);
  })

});