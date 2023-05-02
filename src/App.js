import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharacterPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'characters'}/>}/>
                <Route path={'characters'} element={<CharacterPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
