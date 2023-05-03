import {placeHolderAPIService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll: () => placeHolderAPIService.get(urls.users),
    create: (user) => placeHolderAPIService.post(urls.users, user)
}

export {
    userService
}
