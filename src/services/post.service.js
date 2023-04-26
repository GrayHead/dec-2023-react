import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

class PostService{
    getAll(){
        return axiosService.get(urls.posts)
    }
}

export const postService = new PostService()
