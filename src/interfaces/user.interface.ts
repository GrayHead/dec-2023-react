export interface IUser {
    id: number;
    username: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    last_login: Date;
    created: Date;
    updated: Date;
}
