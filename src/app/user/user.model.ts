export enum ROLES {
    ADMIN = 'Admin',
    SELLER = 'Seller',
    CUSTOMER = 'Customer'
}

export interface User {
    id: string | number;
    username: string;
    role: ROLES;
}