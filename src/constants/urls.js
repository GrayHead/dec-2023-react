const carsAPI = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    cars: {
        cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    carsAPI,
    urls
}
