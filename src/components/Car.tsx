import {FC, useEffect, useRef, useState} from 'react';

import {ICar} from '../interfaces';
import {useAppDispatch} from '../hooks';
import {carActions} from '../redux';
import empty from '../assets/images/empty.jpg'
import {carService} from '../services';

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const [image, setImage] = useState<string>(null);
    const {id, brand, price, year, photo} = car;
    const dispatch = useAppDispatch();
    const fileInput = useRef<HTMLInputElement>();

    const addPhoto = async (): Promise<void> => {
        const formData = new FormData();
        const file: Blob = fileInput.current.files[0];
        formData.append('photo', file)
        await carService.addPhoto(id, formData)
        setImage(URL.createObjectURL(file))
    };

    return (
        <div>
            <img src={photo || image || empty} alt={brand}
                 style={{cursor: photo || image ? 'default' : 'pointer', width: '250px'}}
                 onClick={() => fileInput.current.click()}/>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>delete</button>
            <input type="file" accept={'image/jpeg, image/png'} style={{display: 'none'}} ref={fileInput}
                   disabled={!!photo || !!image} onChange={addPhoto}/>
        </div>
    );
};

export {Car};
