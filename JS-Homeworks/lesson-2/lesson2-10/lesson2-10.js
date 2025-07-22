let a = +prompt('Введіть перше число:');
let b = +prompt('Введіть друге число:');

if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else if (a === b) {
    console.log('====');
}