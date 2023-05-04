import axios from "axios";

import {carsAPI} from "../constants";

const carsAPIService = axios.create({baseURL: carsAPI});

export {
    carsAPIService
}
