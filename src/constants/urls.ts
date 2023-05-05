const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    cars: {
        cars,
        byId: (id: number): string => `${cars}/${id}`
    }
}

export {
    baseURL,
    urls
}
