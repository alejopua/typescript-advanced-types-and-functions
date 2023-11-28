import { ROLES, User } from "./01-enum"

const currentUser: User = {
    username: 'Pedro',
    role: ROLES.CUSTOMER
}

export const checkAccess = () => {
    if(currentUser.role === ROLES.ADMIN) {
        return console.log('Access granted');
    }

    return console.log(false);
}

checkAccess();

export const checkAccessV2 = (role1: string, role2: string) => {
    if(currentUser.role === role1) {
        return console.log('Access granted');
    } else if(currentUser.role === role2) {
        return console.log('Access granted');
    }

    return console.log(false);
}

checkAccessV2(ROLES.ADMIN, ROLES.SELLER);

export const checkAccessV3 = (roles: string[]) => {
    if(roles.includes(currentUser.role)) {
        return console.log('Access granted');
    }

    return console.log(false);
}

checkAccessV3([ROLES.ADMIN, ROLES.SELLER]);

export const checkAccessV4 = (...roles: string[]) => {
    if(roles.includes(currentUser.role)) {
        return console.log('Access granted');
    }

    return console.log(false);
}

checkAccessV4(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);