import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h3>sub pages menu</h3>
            <ol>
                <li>
                    <Link to={'users'}>users page</Link>
                </li>
                <li>
                    <Link to={'posts'}>posts page</Link>
                </li>
                <li>
                    <Link to={'comments'}>comments page</Link>
                </li>
            </ol>

            <div>
                <h3>sub view</h3>
                <Outlet/>

            </div>
        </div>
    );
};

export default Layout;
