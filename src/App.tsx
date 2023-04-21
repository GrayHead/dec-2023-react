import {Navigate, Route, Routes} from 'react-router-dom';
import {MainLayout} from './layouts/MainLayout';
import {UsersPage} from './pages/UsersPage';
import {UserDetailsPage} from './pages/UserDetailsPage';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
