import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue, current} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            // console.log(thunkAPI.getState());
            const {data} = await carService.getAll();
            // await new Promise(resolve => setTimeout(resolve, 2000))
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const update = createAsyncThunk(
    'carSlice/update',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
            console.log(current(state.cars));
        },
    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state, action)=>{
    //         state.cars = action.payload
    //     },
    //     [create.fulfilled]:state=>{
    //         state.trigger = !state.trigger
    //     }
    // }
    // extraReducers: builder =>
    //     builder
    //         .addCase(getAll.fulfilled, (state, action) => {
    //             state.cars = action.payload
    //             state.loading = false
    //         })
    //         .addCase(getAll.pending, (state) => {
    //             state.loading = true
    //         })
    //         .addCase(create.fulfilled, state => {
    //             state.trigger = !state.trigger
    //             state.loading = false
    //         })
    //         .addCase(create.pending, state => {
    //             state.loading = true
    //         })
    //         .addCase(create.rejected, (state, action) => {
    //             state.error = action.payload
    //             state.loading = false
    //         })
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload

            })
            .addCase(update.fulfilled, state => {
                state.carForUpdate = null
            })
            // .addDefaultCase((state, action) => {
            //     console.log(action.type);
            // })
            .addMatcher(isPending(), (state) => {
                state.loading = true
                state.error = null
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false
                state.error = null
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addMatcher(isFulfilled(update, create, deleteCar), state => {
                state.trigger = !state.trigger
            })
});

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}

export {
    carReducer,
    carActions
}
