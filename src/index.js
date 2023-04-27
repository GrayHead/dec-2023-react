import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

let initState = {
    isLoading: false,
    cars: []
};
const carReducer = (state = initState, action) => {

    switch (action.type) {
        case 'START_LOADING':
            return {...state, isLoading: true};
        case 'SET_CARS':
            return {...state, isLoading: false, cars: [...action.payload]};
        case 'SAVE_CAR':
            return {...state, cars: state.cars};
        default:
            return state;

    }
};

let store = createStore(carReducer,applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
