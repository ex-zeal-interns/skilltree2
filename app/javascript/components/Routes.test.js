import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Routes from './Routes';

Enzyme.configure({ adapter: new Adapter() });

describe('<Routes>', () => {
  const wrapper = shallow(<Routes />);
    it('should render corretly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should have a router', () => {
      expect(wrapper.find(Router)).toHaveLength(1)
    })
    it('has a route to the dashboard (<Profile/>)', () => {
      expect(wrapper.find('[path="/profile"]')).toHaveLength(1)
    })
})
