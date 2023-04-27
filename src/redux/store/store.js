import {createStore} from "redux";
import {baseReducer} from "../reducers";

export let store = createStore(baseReducer);
