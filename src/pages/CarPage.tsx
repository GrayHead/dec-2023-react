import {FC} from 'react';

import {CarForm, Cars} from '../components';

const CarPage: FC = () => {

    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarPage};
