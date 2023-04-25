import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

class UserService{
    getAll(){
        return axiosService.get(urls.users)
    }
}

export const userService = new UserService()
