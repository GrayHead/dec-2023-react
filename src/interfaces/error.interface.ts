export interface IError {
    detail?: string
}


export interface IErrorAuth extends IError {
    username: string[]
}
