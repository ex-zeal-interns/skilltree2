import React from 'react';
import ReactDOM from 'react-dom';
import StaticProfile from './StaticProfile';
import Enzyme, { mount, shallow } from 'enzyme';
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
// const wrapper = mount(<div className="some-class" />);
// expect(wrapper.exists('.some-class')).to.equal(true);
// expect(wrapper.find('.other-class').exists()).to.equal(false);
