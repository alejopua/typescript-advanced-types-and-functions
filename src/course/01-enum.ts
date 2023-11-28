export enum ROLES {
    ADMIN = 'Admin',
    SELLER = 'Seller',
    CUSTOMER = 'Customer'
}

export type User = {
    username: string;
    role: ROLES;
}

const peterUser: User = {
    username: 'Pedro',
    role: ROLES.SELLER
}
