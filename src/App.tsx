import {Navigate, Route, Routes} from 'react-router-dom';

import {MainLayout} from './layouts';
import {CarPage} from './pages';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
