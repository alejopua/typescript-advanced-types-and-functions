const withoutEnd = () => {
    while (true) {
        console.log('Hello World');
    }
};

const fail = () => {
    throw new Error('Never function');
};

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return console.log('input is a string');
    } else if (Array.isArray(input)) {
        return console.log('input is an array');
    }

    return fail();
}

example(1111);