import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count2:0
};
const slice = createSlice({
    name:'count2Slice',
    initialState,
    reducers:{
        inc:state => {
            state.count2+=1
        },
        dec:state => {
            state.count2-=1
        },
        reset:(state, action) => {
            state.count2 = action.payload
        }
    }
});

const {reducer:count2Reducer, actions} = slice;

const count2Actions = {
    ...actions
}

export {
    count2Reducer,
    count2Actions
}
