import {IRes} from '../types/axiosRes.type';
import {IUser} from '../interfaces/user.interface';
import {axiosService} from './axios.service';
import {urls} from '../constants/urls';

const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users.users),
    getById: (id: string): IRes<IUser> => axiosService.get(urls.users.byId(id))
}

export {
    userService
}
