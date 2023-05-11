import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {unstable_HistoryRouter as BrowserRouter} from 'react-router-dom';

import App from './App';
import {setupStore} from './redux';
import {history} from './services'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = setupStore();

root.render(
    <Provider store={store}>
        {/*// @ts-expect-error*/}
        <BrowserRouter history={history}>
            <App/>
        </BrowserRouter>
    </Provider>
);

