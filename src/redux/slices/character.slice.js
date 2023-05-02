import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
};

const slice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            const {results, info: {next, prev}} = action.payload;
            state.characters = results
            state.prevPage = prev
            state.nextPage = next
        }
    }
});

const {reducer: characterReducer, actions} = slice;

const characterActions = {
    ...actions
}

export {
    characterReducer,
    characterActions
}
