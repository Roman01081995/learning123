 //створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangle = (a, b) => {
    let result = a * b;
    console.log(result);
    return result;
};

//створити функцію, яка обчислює та повертає площу кола з радіусом r

let circleArea = (r) => {
    let area = Math.PI * r * r;
    console.log(area);
    return area;
};

circleArea(5);

//створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let cylinderArea = (h, r) => {
    let area = 2 * Math.PI * r * (r + h);
    console.log(area);
    return area;
}

cylinderArea(3, 10);

//створити функцію, яка приймає масив та виводить кожен його елемент

let something = (array) => {
    for (let element of array) {
        console.log(element);
    }
}

//створити функцію, яка створює параграф з текстом. Текст задати через аргумент

let sometext = (text) => {
    document.write(`<p>${text}</p>`);
}

sometext('Hello, world!');
sometext('Hello to you!');

//створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let someArgument = (text) => {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
                    </ul>`);
}

someArgument('Hello');

//створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let someElements = (text, count) => {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

someElements('Hello', 5);

//створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let buildList = (arr) => {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

buildList([1, 'hello', true, 42, 'world', false]);

//створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

let someThing = (users) => {
    for(let user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
}
}

someThing([
    {id: 1, name: 'Chip', age: 30},
    {id: 2, name: 'Dale', age: 25}, 
    {id: 3, name: 'Myxa', age: 40}
]);


//створити функцію, яка повертає найменше число з масиву

let minFromArray = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(minFromArray([8, 15, 3, -4, 10]));

//створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum([1, 2, 10]));

//створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах. Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1)); 


//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency). Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
}

let result = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 49}], 'EUR');

console.log(result);
