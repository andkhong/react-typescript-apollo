import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
  const component = shallow(<Header />);

  it('renders a div with className, left', () => {
    expect(component.find('.left')).to.have.length(1);
  });

  it('renders a div with className, right', () => {
    expect(component.find('.right')).to.have.length(1);
  });
});