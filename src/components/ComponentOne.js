import {count1Actions} from "../redux";
import {useDispatch} from "react-redux";

const ComponentOne = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(count1Actions.inc())}>inc</button>
            <button onClick={()=>dispatch(count1Actions.dec())}>dec</button>
            <button onClick={()=>dispatch(count1Actions.reset())}>reset</button>
        </div>
    );
};

export {ComponentOne};
