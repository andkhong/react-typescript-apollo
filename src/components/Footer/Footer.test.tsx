import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  const component = shallow(<Footer isMobile />);

  it('renders a div with className, left', () => {
    expect(component.find('.left-container')).to.have.length(1);
  });

  it('does not renders a div with className, right on mobile', () => {
    expect(component.find('.right-container')).to.have.length(0);
  });

  it('renders a div with className, right on tablet, and desktops', () => {
    const component = shallow(<Footer isMobile={false} />);
    expect(component.find('.right-container')).to.have.length(1);
  });

});