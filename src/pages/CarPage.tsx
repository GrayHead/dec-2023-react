import {FC} from 'react';

import {CarForm, Cars} from '../components';
import {useAppSelector} from '../hooks';

const CarPage: FC = () => {
    const {errors} = useAppSelector(state => state.carReducer);

    return (
        <div>
            <CarForm/>
            {errors?.detail && <h1>{errors.detail}</h1>}
            {errors?.brand && <h1>{errors.brand}</h1>}
            {errors?.price && <h1>{errors.price}</h1>}
            {errors?.year && <h1>{errors.year}</h1>}
            <Cars/>
        </div>
    );
};

export {CarPage};
