import {useContext} from "react";
import {Context} from "./index";

const Second = () => {
    const {users} = useContext(Context);
    return (
        <div>
            {users.map((user, index)=><div key={index}>{user}</div>)}
        </div>
    );
};

export {Second};
