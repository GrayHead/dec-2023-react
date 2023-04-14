import {FC} from 'react';
import {ICar} from '../interfaces/car.interface';

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car;
    const greeting = (id:number): void => {
        console.log('hello');
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => greeting(1)}></button>
        </div>
    );
};

export {Car};
