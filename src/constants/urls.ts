const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'

const urls = {
    users: {
        users,
        byId: (id: string): string => `${users}/${id}`
    }
}

export {
    baseURL,
    urls
}
