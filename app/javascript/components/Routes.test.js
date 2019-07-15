import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe('<Routes>', () => {
  const wrapper = shallow(<Router />);
    it('should have a Router', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
