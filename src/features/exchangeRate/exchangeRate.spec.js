import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import ExchangeRate from './ExchangeRate'

test('renders exchange rate component', async () => {
    const { getByText, getByRole} = render(
        <Provider store={store}>
            <ExchangeRate />
        </Provider>
    );

  expect(getByText(/Exchange Rates/)).toBeInTheDocument();

  expect(getByRole('combobox')).toBeInTheDocument();

   expect(await getByRole('list')).toBeInTheDocument();
});
