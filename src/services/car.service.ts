import {IRes} from '../types';
import {ICar, IPagination} from '../interfaces';
import {axiosService} from './axios.service';
import {urls} from '../constants';

class CarService {
    getAll(): IRes<IPagination<ICar[]>> {
        return axiosService.get(urls.cars.cars)
    }

    create(car: ICar): IRes<ICar> {
        return axiosService.post(urls.cars.cars, car)
    }

    updateById(id: number, car: ICar): IRes<ICar> {
        return axiosService.put(urls.cars.byId(id), car)
    }

    deleteById(id: number): IRes<void> {
        return axiosService.delete(urls.cars.byId(id))
    }
}

export const carService = new CarService()
