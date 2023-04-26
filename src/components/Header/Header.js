import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'cats_dogs'}>CatsDogs</NavLink>
        </div>
    );
};

export {Header};
