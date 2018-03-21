import * as React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Login from './Login';

describe('<Login />', () => {
  it('renders Login', () => {
    const component = shallow(<Login />);
    expect(component).to.have.length(1);
  })

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<Login onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 0);
  });

});