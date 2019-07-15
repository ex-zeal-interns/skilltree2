import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import Routes from './Routes'

Enzyme.configure({ adapter: new Adapter() });



describe('<App>', () => {
  const wrapper = shallow(<App/>)
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('has a link to the dashboard (<Profile/>)', () => {
    expect(wrapper.find('[href="/profile"]')).toHaveLength(1)
  })
  it('has a router', () => {
    expect(wrapper.find(Routes)).toHaveLength(1)
  })
})
