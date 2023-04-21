import {FC, useEffect, useState} from 'react';
import {useAppLocation} from '../hooks/router.hooks';
import {IUser} from '../interfaces/user.interface';
import {UserDetails} from '../components/UserDetails';
import {useParams} from 'react-router-dom';
import {userService} from '../services/user.service';

const UserDetailsPage: FC = () => {
    const {id} = useParams();
    const {state} = useAppLocation<IUser>();
    const [user, setUser] = useState<IUser>(null);

    useEffect(() => {
        if (!state){
            userService.getById(id).then(value => value.data).then(value => setUser(value));
        }else {
            setUser(state)
        }
    }, [id, state])
    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {UserDetailsPage};
