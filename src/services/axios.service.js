import axios from "axios";

import {carsAPI, jsonPlaceHolderAPI} from "../constants";

const placeHolderAPIService = axios.create({baseURL: jsonPlaceHolderAPI});
const carsAPIService = axios.create({baseURL: carsAPI});

export {
    placeHolderAPIService,
    carsAPIService
}
