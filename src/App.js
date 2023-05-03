import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarPage, CommentPage, UserPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'comments'} element={<CommentPage/>}/>
                <Route path={'cars'} element={<CarPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
