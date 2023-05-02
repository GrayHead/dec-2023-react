import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {characterReducer} from "./slices";

const rootReducer = combineReducers({
    characters: characterReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
