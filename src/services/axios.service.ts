import axios, {AxiosResponse} from 'axios';

import {baseURL} from '../configs/urls';

type IRes<T> = Promise<AxiosResponse<T>>
const axiosService = axios.create({baseURL});

export {
    axiosService,
}

export type {
    IRes
}

