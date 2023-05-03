import {placeHolderAPIService} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getAll: () => placeHolderAPIService.get(urls.comments),
    create: (comment) => placeHolderAPIService.post(urls.comments, comment)
}

export {
    commentService
}
