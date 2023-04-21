import {FC} from 'react';
import {IUser} from '../interfaces/user.interface';

interface IProps {
    user: IUser;
}

const UserDetails: FC<IProps> = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {UserDetails};
