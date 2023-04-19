import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {

    let {state} = useLocation();

    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export default UserDetails;
