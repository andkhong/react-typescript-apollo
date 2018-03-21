// Allows of Enzyme/Jest configuration

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Object.defineProperty(window, 'localStorage', { value: {}, writable: true });

configure({ adapter: new Adapter() });

