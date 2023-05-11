import {Navigate, Route, Routes} from 'react-router-dom';

import {MainLayout} from './layouts';
import {CarPage, LoginPage, RegisterPage} from './pages';
import {RequiredAuth} from './hoc';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'login'}/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
                <Route path={'cars'} element={
                    <RequiredAuth>
                        <CarPage/>
                    </RequiredAuth>
                }/>
            </Route>
        </Routes>
    );
};

export default App;
