import {useDispatch, useSelector} from "react-redux";
import {reset, increment, decrement} from "./redux";


const App = () => {

    let store = useSelector(state => state);
    let dispatch = useDispatch();

    const onincrement = () => {
        dispatch(increment());

    };
    const ondecrement = () => {
        dispatch(decrement());
    };
    const onres = () => {
        dispatch(reset());
    };
    return (
        <div>

            <h1>{store}</h1>
            <button onClick={onincrement}>increment</button>
            <button onClick={ondecrement}>decrement</button>
            <button onClick={onres}>reset</button>
        </div>
    );
};

export default App;
