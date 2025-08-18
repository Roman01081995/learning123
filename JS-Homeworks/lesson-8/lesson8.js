/*– є масив

за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration

Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції */

let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];


let transformed = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log(transformed);

/*Створити функцію, яка робить глибоку копію об’єкта.

Додати перевірки на undefined, null, NaN.

Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.*/

function cloner(obj) {
    if (obj === null) return null;
    if (obj === undefined) return undefined;
    if (typeof obj === 'number' && isNaN(obj)) return NaN;
    if (typeof obj !== 'object') return obj;

    let functions = Object.entries(obj)
        .filter(([_, value]) => typeof value === 'function');

    let clone = JSON.parse(JSON.stringify(obj));

    for (let [key, func] of functions) {
        clone[key] = func;
    }

    return clone;
}

let original = {
    id: 1,
    name: "Test",
    undef: undefined,
    n: null,
    x: NaN,
    sayHi() { console.log("Hi!"); }
};

let copy = cloner(original);

console.log(copy);     
copy.sayHi();          
console.log(copy.undef); 
