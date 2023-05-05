import {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../hooks';
import {Car} from './Car';
import {carActions} from '../redux';

const Cars: FC = () => {
    const {cars, trigger} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch, trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
