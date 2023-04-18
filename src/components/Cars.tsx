import {FC} from 'react';

import {ICar} from '../interfaces/car.interface';
import {Car} from './Car';
import {IUseState} from '../types/useState.type';

interface IProps {
    cars: ICar[];
    setCarForUpdate: IUseState<ICar | null>;
    setOnChange: IUseState<boolean>
}

const Cars: FC<IProps> = ({cars, setCarForUpdate, setOnChange}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>)}
        </div>
    );
};

export {Cars};
