import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {  legacy_createStore as createStore } from 'redux';
import myReducer from '../Redux/reducers';

export const renderWithRouterAndRedux = (component, initialState, route = '/') => {
  const store = createStore(myReducer, initialState);

  return {
    ...render(
      <Provider store={ store }>
        <MemoryRouter initialEntries={ [route] }>
          {component}
        </MemoryRouter>
      </Provider>,
    ),
    store,
  };
};

export default renderWithRouterAndRedux;