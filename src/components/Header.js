import {useSelector} from "react-redux";

const Header = () => {
    const {count1} = useSelector(state => state.count1);
    const {count2} = useSelector(state => state.count2);
    return (
        <div>
            <div>Count1: {count1}</div>
            <div>Count2: {count2}</div>
        </div>
    );
};

export {Header};
