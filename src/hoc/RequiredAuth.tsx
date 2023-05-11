import {FC, ReactElement} from 'react';
import {authService} from '../services';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../hooks';

interface IProps {
    children: ReactElement
}

const RequiredAuth: FC<IProps> = ({children}) => {
    const accessToken = authService.getAccessToken();

    if (!accessToken) {
        return <Navigate to={'/login'}/>
    }

    return children
};

export {RequiredAuth};

// const RequiredAuth: FC<IProps> = ({children}) => {
//     const {me} = useAppSelector(state => state.authReducer);
//
//     if (!me) {
//         return <Navigate to={'/login'}/>
//     }
//
//     return children
// };
//
// export {RequiredAuth};
