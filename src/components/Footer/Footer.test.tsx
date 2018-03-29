import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  const component = shallow(<Footer isMobile />);

  it('renders a div with className, left', () => {
    expect(component.find('.left-container')).to.have.length(1);
  });

  it('renders a div with className, right', () => {
    expect(component.find('.right-container')).to.have.length(1);
  });
});