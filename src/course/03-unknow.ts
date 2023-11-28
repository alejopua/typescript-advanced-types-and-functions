// any vs unknow = any is more flexible than unknow, because unknow can't be assigned to any other type
// unknow is more strict than any, active type checking is required
// unknow is better than any, because it's more strict

// any
let otherIdClient: any;
otherIdClient = 1;
otherIdClient = 'johndoe';
otherIdClient = true;
otherIdClient = {};
otherIdClient = 20;

let newOtherIdClient: number = otherIdClient;

console.log(newOtherIdClient.toFixed(2));

// unknow

let otherIdClient2: unknown;
otherIdClient2 = 'johndoe';

if (typeof otherIdClient2 === 'number') {
    const rta = otherIdClient2.toFixed(2);
    console.log('rta: ', rta);
} else {
    console.log('otherIdClient2 must be a number');
}

if (typeof otherIdClient2 === 'string') {
    let newVar: string = otherIdClient2;
    console.log(newVar.toUpperCase());
}

const newFunction = (str: string): unknown => {
    return console.log(JSON.parse(str));
}
newFunction('{"name": "John Doe"}');