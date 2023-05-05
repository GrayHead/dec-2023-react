import {FC} from 'react';
import {Outlet} from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
