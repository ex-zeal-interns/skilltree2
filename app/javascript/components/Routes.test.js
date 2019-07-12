import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe('<Routes>', () => {
  const current_user_profile = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@example.com',
    timezone: 'UTC',
    url: 'iou22o38fhlg',
  }
  const profUrl = `/profile/${current_user_profile.url}`
  const wrapper = mount(<Routes current_user_profile={current_user_profile}/>);

    it('should have a Router', () => {
        expect(wrapper.find('Router').length).toEqual(1);
    })
    it('Should have a profile route', () => {
        expect(wrapper.containsMatchingElement(<Link to={profUrl}>Profile</Link>)).toBe(true)
     });
})
