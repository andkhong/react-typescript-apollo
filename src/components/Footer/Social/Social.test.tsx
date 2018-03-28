import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Social from './Social';

describe('Footer <Social />', () => {
  const component = shallow(<Social />);
  it('should have social media links', () => {
    expect(component.find('[href="https://medium.com/@thebeetoken"]')).to.have.length(1);
    expect(component.find('[href="https://twitter.com/thebeetoken"]')).to.have.length(1);
    expect(component.find('[href="https://t.me/beetoken"]')).to.have.length(1);
    expect(component.find('[href="https://www.facebook.com/thebeetoken/"]')).to.have.length(1);
    expect(component.find('[href="https://www.instagram.com/thebeetoken/"]')).to.have.length(1);
    expect(component.find('[href="https://www.reddit.com/r/beetoken/"]')).to.have.length(1);
  });
});