import {useDispatch} from "react-redux";
import {count2Actions} from "../redux";

const ComponentTwo = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(count2Actions.inc())}>inc</button>
            <button onClick={()=>dispatch(count2Actions.dec())}>dec</button>
            <button onClick={()=>dispatch(count2Actions.reset(555))}>reset</button>
        </div>
    );
};

export {ComponentTwo};
