import {IRes} from '../types/res.type';
import {IUser} from '../interfaces/user.interface';
import {placeAxiosService} from './axios.service';
import {urls} from '../constants/urls';

const userService = {
    getAll: (): IRes<IUser[]> => placeAxiosService.get(urls.placeAPI.users),
    create: (user: IUser): IRes<IUser> => placeAxiosService.post(urls.placeAPI.users, user)
}

export {
    userService
}
