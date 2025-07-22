let day = +prompt('Введіть число від (1-31):');

if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця');
} else if (day >= 21 && day <= 31) {
    console.log('Третя декада місяця');
} else {
    console.log('Некоректне значення');
}