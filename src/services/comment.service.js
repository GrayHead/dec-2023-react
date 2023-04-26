import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

class CommentService {
    getAll() {
        return axiosService.get(urls.comments)
    }
}

export const commentService = new CommentService()
