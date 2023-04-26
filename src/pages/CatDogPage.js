import {Cats} from "../components/Cats";
import {Dogs} from "../components/Dogs";
import {useReducer} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1
            cat.id = catId
            return {...state, cats:[...state.cats, cat]}
        case 'ADD_DOG':
            const dog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id+1||1
            dog.id = dogId
            return {...state, dogs:[...state.dogs, dog]}
        case 'DEL_CAT':
            const idForDeleteCat = action.payload;
            const catIndex = state.cats.findIndex(value => value.id===idForDeleteCat);
            state.cats.splice(catIndex, 1)
            return {...state};
        case 'DEL_DOG':
            const idForDeleteDog = action.payload;
            const dogIndex = state.dogs.findIndex(value => value.id===idForDeleteDog);
            state.dogs.splice(dogIndex, 1)
            return {...state};
        default:
            return state;
    }
}
const CatDogPage = () => {
    const stateDispatch = useReducer(reducer, {cats: [], dogs: []});
    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <Cats stateDispatch={stateDispatch}/>
            <Dogs stateDispatch={stateDispatch}/>
        </div>
    );
};

export {CatDogPage};
