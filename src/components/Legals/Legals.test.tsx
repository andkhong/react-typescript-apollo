import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Legals from './Legals';

describe('<Legals />', () => {
  const component = shallow(<Legals />);

  it('renders a div with className, left', () => {
    expect(component.find('.left')).to.have.length(0);
  });

});