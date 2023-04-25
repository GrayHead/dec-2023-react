import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
export const Context = createContext(null);
const value = {}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={value}>
    <App/>
    </Context.Provider>
);
