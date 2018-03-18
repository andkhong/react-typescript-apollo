import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from '../../src/components/Footer';

describe('<Footer />', () => {
  const component = shallow(<Footer />);

  it('renders a div with className, left', () => {
    expect(component.find('.left')).to.have.length(1);
  });

  it('renders a div with className, right', () => {
    expect(component.find('.right')).to.have.length(1);
  });

  it('should have social media links', () => {
    expect(component.find('[href="https://medium.com/@thebeetoken"]')).to.have.length(1);
    expect(component.find('[href="https://twitter.com/thebeetoken"]')).to.have.length(1);
    expect(component.find('[href="https://t.me/beetoken"]')).to.have.length(1);
    expect(component.find('[href="https://www.facebook.com/thebeetoken/"]')).to.have.length(1);
    expect(component.find('[href="https://www.instagram.com/thebeetoken/"]')).to.have.length(1);
    expect(component.find('[href="https://www.reddit.com/r/beetoken/"]')).to.have.length(1);
  });

});