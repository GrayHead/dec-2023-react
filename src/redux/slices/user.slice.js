import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
};

const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.users = action.payload
        },
        create: (state, action) => {
            state.users.push(action.payload.user)
        }
    }
});

const {reducer: userReducer, actions} = slice;


const userActions = {
    ...actions
}

export {
    userReducer,
    userActions
}
