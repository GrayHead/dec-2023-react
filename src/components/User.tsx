import {FC} from 'react';

import {IUser} from '../interfaces/user.interface';

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const {id, name, email} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {User};
