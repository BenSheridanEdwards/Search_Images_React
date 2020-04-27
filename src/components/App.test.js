import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';
import SearchBar from './SearchBar';

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
    return wrapper;
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders the SearchBar component', () => {
  const wrapper = setup()
  const searchBar = findByTestAttr(wrapper, "component-search-bar")
  expect(searchBar.text()).toBe("<SearchBar />")
})

test('renders the ImageList component', () => {
  const wrapper = setup()
  const imageList = findByTestAttr(wrapper, "component-image-list")
  expect(imageList.text()).toBe("<ImageList />")
})
