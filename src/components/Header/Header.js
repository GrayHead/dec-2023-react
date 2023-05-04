import {useNavigate} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <button onClick={() => navigate('cars')}>cars</button>
        </div>
    );
};

export {Header};
