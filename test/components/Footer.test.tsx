import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Footer from '../../src/components/Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('renders a div with className, left', () => {
    expect(wrapper.find('.left')).to.have.length(1);
  });

  it('renders a div with className, right', () => {
    expect(wrapper.find('.right')).to.have.length(1);
  });

  it('should have social media links', () => {
    expect(wrapper.find('[href="https://medium.com/@thebeetoken"]')).to.have.length(1);
    expect(wrapper.find('[href="https://twitter.com/thebeetoken"]')).to.have.length(1);
    expect(wrapper.find('[href="https://t.me/beetoken"]')).to.have.length(1);
    expect(wrapper.find('[href="https://www.facebook.com/thebeetoken/"]')).to.have.length(1);
    expect(wrapper.find('[href="https://www.instagram.com/thebeetoken/"]')).to.have.length(1);
    expect(wrapper.find('[href="https://www.reddit.com/r/beetoken/"]')).to.have.length(1);
  });

});