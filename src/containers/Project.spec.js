import React from 'react';
import { renderIntoDocument, scryRenderedComponentsWithType } from 'react-dom/test-utils';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from './Project';
const { expect } = global.chai;

describe('(Container) Home', () => {
  it('renders a Home-container', () => {
    const mockStore = configureMockStore();
    const initialState = {};
    const store = mockStore(initialState);
    const component = renderIntoDocument(
      <Provider store={store}>
        <MemoryRouter><Home /></MemoryRouter>
      </Provider>
    );
    const homeList = scryRenderedComponentsWithType(component, Home);
    expect(homeList.length).to.equal(1);
  });
});
