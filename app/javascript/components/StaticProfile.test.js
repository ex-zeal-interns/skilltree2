import React from 'react';
import StaticProfile from './StaticProfile';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('<StaticProfile>', () => {
  const profile = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@example.com',
    timezone: 'UTC',
    url: 'iou22o38f4',
  }
  const wrapper = shallow(<StaticProfile profile = {profile}/>)
  it('renders corretly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('displays user fullname', () => {
    expect(wrapper.find('#fullname').length).toEqual(1)
  })
  it('displays user email', () => {
    expect(wrapper.find('#email').length).toEqual(1)
  })
  it('displays user timezone', () => {
    expect(wrapper.find('#timezone').length).toEqual(1)
  })
})
