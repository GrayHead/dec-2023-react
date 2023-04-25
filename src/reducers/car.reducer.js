const carActionTypes = {
    SET_ALL: 'SET_ALL',
    SET_CAR_FOR_UPDATE: 'SET_CAR_FOR_UPDATE',
    TRIGGER: 'TRIGGER'
}

const carActions = {
    setAll:(cars)=>({type:carActionTypes.SET_ALL, payload:cars}),
    setCarForUpdate:(car)=>({type:carActionTypes.SET_CAR_FOR_UPDATE, payload:car}),
    setTrigger:()=>({type:carActionTypes.TRIGGER}),
}
const carInitialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}
const carReducer = (state, action) => {
    switch (action.type) {
        case carActionTypes.SET_ALL:
            return {...state, cars: action.payload}
        case carActionTypes.SET_CAR_FOR_UPDATE:
            return {...state, carForUpdate: action.payload}
        case carActionTypes.TRIGGER:
            return {...state, trigger: !state.trigger}
        default:
            return state
    }
}

export {
    carActions,
    carInitialState,
    carReducer
}
