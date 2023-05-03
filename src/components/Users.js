import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../services";
import {userActions} from "../redux";
import {User} from "./User";

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => dispatch(userActions.setAll(value)))
    }, [dispatch])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
