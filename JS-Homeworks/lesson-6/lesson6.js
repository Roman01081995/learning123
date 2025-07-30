//Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);   
console.log(str3.length);

//Перевести до великого регістру наступні стрінгові значення
//‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let str4 = 'hello world';
let str5 = 'lorem ipsum';
let str6 = 'javascript is cool';

console.log(str4.toUpperCase());
console.log(str5.toUpperCase());
console.log(str6.toUpperCase());

//Перевести до нижнього регістру наступні стрінгові значення
//‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let str7 = 'HELLO WORLD';
let str8 = 'LOREM IPSUM';
let str9 = 'JAVASCRIPT IS COOL';
console.log(str7.toLowerCase());
console.log(str8.toLowerCase());
console.log(str9.toLowerCase());

//Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let cleanStr = str.trim();
console.log(cleanStr);

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = ‘Ревуть воли як ясла повні’;
//let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

function stringToArray(str) {
    return str.split(' ');
}
let str10 = 'Ревуть воли як ясла повні';
let arr = stringToArray(str10);
console.log(arr);

//є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);

// створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//let nums = [11,21,3];
//sortNums(nums,’ascending’) // [3,11,21]
//sortNums(nums,’descending’) // [21,11,3]
function sortNums(array, direction) {
    //const copy = [...array];//тут би ще мало бути це бо виводиться в консоль не так
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } 
    if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
}

let array = [11, 21, 3];

console.log(sortNums(array, 'ascending')); // [3, 11, 21]
console.log(sortNums(array, 'descending')); // [21, 11, 3]

/*є масив

let coursesAndDurationArray = [

    {title: ‘JavaScript Complex’, monthDuration: 5},

    {title: ‘Java Complex’, monthDuration: 6},

    {title: ‘Python Complex’, monthDuration: 6},

    {title: ‘QA Complex’, monthDuration: 4},

    {title: ‘FullStack’, monthDuration: 7},

    {title: ‘Frontend’, monthDuration: 4}

];

 — відсортувати його за спаданням за monthDuration

 — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців

 — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedCourses = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

console.log(sortedCourses);

let longCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);

console.log(longCourses);

let coursesWithId = coursesAndDurationArray.map((course, index) => {
  return {
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
  };
});

console.log(coursesWithId);


//взяти з arrays.js масив coursesArray


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


//написати пошук всіх об’єктів, в яких в modules є sass

//написати пошук всіх об’єктів, в яких в modules є docker

let foundSass = coursesArray.filter(course => course.modules.includes('sass'));

console.log(foundSass);

let foundDocker = coursesArray.filter(course => course.modules.includes('docker'));

console.log(foundDocker);


/*описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу

Після опису, використовуючи функції масивів:

 – знайти піковий туз

 – всі шістки

 – всі червоні карти

 – всі буби

 – всі трефи від 9 та більше

 

Приклад моделі об’єкту карти:

{

    cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’

    value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’

    color:”, // ‘red’,’black’

}*/

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const colors = {
    spade: 'black',
    clubs: 'black',
    diamond: 'red',
    heart: 'red'
};
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let deck = [];

for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: colors[suit]
        });
    }
}

let aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', aceOfSpades);

let sixes = deck.filter(card => card.value === '6');
console.log('Всі шістки:', sixes);

let redCards = deck.filter(card => card.color === 'red');
console.log('Всі червоні карти:', redCards);

let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('Всі буби:', diamonds);

let clubs9plus = deck.filter(card => card.cardSuit === 'clubs' && (
    ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
));
console.log('Всі трефи від 9 та більше:', clubs9plus);


/*Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

Приклад моделі кінцевого об’єкту

{
    spades:[],

    diamonds:[],

    hearts:[],

    clubs:[]
}*/


const suitsSecond = ['spade', 'diamond', 'heart', 'clubs'];
const valuesSecond = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const colorsSecond = {
    spade: 'black',
    clubs: 'black',
    diamond: 'red',
    heart: 'red'
};


const deckSecond = [];

for (const suit of suitsSecond) {
    for (const value of valuesSecond) {
        deckSecond.push({
            cardSuit: suit,
            value: value,
            color: colorsSecond[suit]
        });
    }
}


const groupedBySuitSecond = deckSecond.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;
        case 'clubs':
            acc.clubs.push(card);
            break;
    }
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(groupedBySuitSecond);
