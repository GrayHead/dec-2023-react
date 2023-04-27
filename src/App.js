import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


const fetchCars = () => async (dispatch) => {

    dispatch({type: 'START_LOADING'});
    let response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then(value => value.json())
    console.log(response);
    dispatch({type: 'SET_CARS', payload: response});


}

const App = () => {

    let store = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
        //.....

    }, []);


    return (
        <div>
            {store.isLoading && <h2>loading...</h2>}

            {
                store.cars.map(value => <div key={value.id}>{value.brand}</div>)
            }

        </div>
    );
};

export default App;
