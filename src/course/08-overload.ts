// pedro => [p,e,d,r,o] - string => string[]
// [p,e,d,r,o] => pedro - string[] => string


// Sobrecarga de funciones | overload
function parseString(str: string): string[];
function parseString(str: string[]): string;

function parseString(str: unknown): unknown {
    if (Array.isArray(str)) {
        return console.log('string[] to string: ', str.join(''));
    } else if (typeof str === 'string') {
        return console.log('string to string[]: ', str.split(''))
    }
}

parseString('pedro');
parseString(['p', 'e', 'd', 'r', 'o']);