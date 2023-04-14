import axios from "axios";
import {baseURL} from "../configs/urls";

const axiosService = axios.create({baseURL});


export {
    axiosService
}
