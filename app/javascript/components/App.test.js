import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });



describe('<App>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div,);
    ReactDOM.unmountComponentAtNode(div);
  })

})
