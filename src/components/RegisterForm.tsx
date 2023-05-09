import {SubmitHandler, useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {useNavigate} from 'react-router-dom';

import {IAuth} from '../interfaces';
import {authValidator} from '../validators';
import {useAppDispatch, useAppSelector} from '../hooks';
import {authActions} from '../redux';

const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const {error} = useAppSelector(state => state.authReducer);
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IAuth>({
        mode: 'all',
        resolver: joiResolver(authValidator)
    });

    const registerUser: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register(user));
        if (requestStatus === 'fulfilled') {
            navigate('/login')
        }
    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button disabled={!isValid}>Register</button>
            {Object.keys(errors).length > 0 && <div>{Object.values(errors)[0].message}</div>}
            {error && <div>{error.username[0]}</div>}
        </form>
    );
};

export {RegisterForm};
