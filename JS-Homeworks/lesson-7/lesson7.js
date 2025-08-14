//Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone

//створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new User(1, 'Mark', 'Snow', 'mark@com.ua', '+380505555566');
console.log(user);

let users = [
    new User(1, 'Mark', 'Snow', 'mark@com.ua', '+380505555566'),
    new User(2, 'Black', 'Snow', 'black@com.ua', '+380505555568'),
    new User(3, 'White', 'Snow', 'white@com.ua', '+380505555569'),
    new User(4, 'Jimmy', 'Snow', 'jimmy@com.ua', '+380505555561'),
    new User(5, 'Lola', 'Snow', 'lola@com.ua', '+380505555562'),
    new User(6, 'Kola', 'Snow', 'kola@com.ua', '+380505555563'),
    new User(7, 'Brad', 'Snow', 'brad@com.ua', '+380505555549'),
    new User(8, 'Step', 'Snow', 'step@com.ua', '+380505555679'),
    new User(9, 'Michal', 'Snow', 'michal@com.ua', '+380505675569'),
    new User(10, 'Cancel', 'Snow', 'cancel@com.ua', '+380502255569'),
    new User(11, 'Rabit', 'Snow', 'rabit@com.ua', '+380505533569'),
];
console.log(users);

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

let userson = [
    new User(1, 'Mark', 'Snow', 'mark@com.ua', '+380505555566'),
    new User(2, 'Black', 'Snow', 'black@com.ua', '+380505555568'),
    new User(3, 'White', 'Snow', 'white@com.ua', '+380505555569'),
    new User(4, 'Jimmy', 'Snow', 'jimmy@com.ua', '+380505555561'),
    new User(5, 'Lola', 'Snow', 'lola@com.ua', '+380505555562'),
    new User(6, 'Kola', 'Snow', 'kola@com.ua', '+380505555563'),
    new User(7, 'Brad', 'Snow', 'brad@com.ua', '+380505555549'),
    new User(8, 'Step', 'Snow', 'step@com.ua', '+380505555679'),
    new User(9, 'Michal', 'Snow', 'michal@com.ua', '+380505675569'),
    new User(10, 'Cancel', 'Snow', 'cancel@com.ua', '+380502255569'),
];

let parniUsers = userson.filter(user => user.id % 2 === 0);
console.log(parniUsers);


//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let usersoncheck = [
    new User(1, 'Mark', 'Snow', 'mark@com.ua', '+380505555566'),
    new User(22, 'Black', 'Snow', 'black@com.ua', '+380505555568'),
    new User(3, 'White', 'Snow', 'white@com.ua', '+380505555569'),
    new User(444, 'Jimmy', 'Snow', 'jimmy@com.ua', '+380505555561'),
    new User(5, 'Lola', 'Snow', 'lola@com.ua', '+380505555562'),
    new User(6, 'Kola', 'Snow', 'kola@com.ua', '+380505555563'),
    new User(77, 'Brad', 'Snow', 'brad@com.ua', '+380505555549'),
    new User(8, 'Step', 'Snow', 'step@com.ua', '+380505555679'),
    new User(9, 'Michal', 'Snow', 'michal@com.ua', '+380505675569'),
    new User(10, 'Cancel', 'Snow', 'cancel@com.ua', '+380502255569'),
];

let sortUsers = usersoncheck.sort((a, b) => a.id - b.id);
console.log(sortUsers);

// створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order; 
}

let clients = [
    new Client(1, 'Mark',   'Snow', 'mark@com.ua',   '+380505555566', ['Milk', 'Bread']),
    new Client(2, 'Black',  'Snow', 'black@com.ua',  '+380505555568', ['Eggs', 'Cheese', 'Juice']),
    new Client(3, 'White',  'Snow', 'white@com.ua',  '+380505555569', ['Sugar']),
    new Client(4, 'Jimmy',  'Snow', 'jimmy@com.ua',  '+380505555561', ['Butter', 'Tea']),
    new Client(5, 'Lola',   'Snow', 'lola@com.ua',   '+380505555562', ['Coffee', 'Milk', 'Cake']),
    new Client(6, 'Kola',   'Snow', 'kola@com.ua',   '+380505555563', ['Bread']),
    new Client(7, 'Brad',   'Snow', 'brad@com.ua',   '+380505555549', ['Milk', 'Meat']),
    new Client(8, 'Step',   'Snow', 'step@com.ua',   '+380505555679', ['Cake', 'Ice cream']),
    new Client(9, 'Michal', 'Snow', 'michal@com.ua', '+380505675569', ['Juice']),
    new Client(10,'Cancel', 'Snow', 'cancel@com.ua', '+380502255569', ['Water', 'Chips'])
];

console.log(clients);


// Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

let sortOrders = clients.sort ((a, b) => a.order.length - b.order.length);
console.log(sortOrders);


/*– Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:

    — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`

    — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed

    — changeYear (newValue) – змінює рік випуску на значення newValue

    — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
*/

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;                
    this.manufacturer = manufacturer;  
    this.year = year;                  
    this.maxSpeed = maxSpeed;          
    this.engineVolume = engineVolume;  

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };

    this.info = function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

let car1 = new Car('Civic', 'Honda', 2008, 160, 1.3);

car1.drive();
car1.increaseMaxSpeed(20);
car1.drive();

car1.changeYear(2007);
car1.addDriver({ name: 'Roman', age: 30, driverlicense: true });

car1.info();


/*– (Те саме, тільки через клас)

Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:

— drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`

    — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed

    — changeYear (newValue) – змінює рік випуску на значення newValue

    — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

*/


class CarSecond {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key, this[key]);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}


let car123 = new CarSecond('Civic', 'Honda', 2008, 160, 1.3);

car123.drive();
car123.increaseMaxSpeed(20);
car123.drive();

car123.changeYear(2007);
car123.addDriver({ name: 'Roman', age: 30, driverlicense: true });

car123.info();


/*
– створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.

Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.

За допомоги циклу знайти, яка попелюшка повинна бути з принцом.

! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
*/

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
  constructor(name, age, slipper) {
    this.name = name;
    this.age = age;
    this.slipper = slipper;
    this.wife = null;
  }
}

let cinderellas = [
  new Cinderella('Jasmin', 22, 37),
  new Cinderella('Lola', 21, 38),
  new Cinderella('Katrin', 23, 36),
  new Cinderella('Lila', 24, 40),
  new Cinderella('Karolina', 22, 39),
  new Cinderella('Viktoria', 26, 34),
  new Cinderella('Masha', 20, 44),
  new Cinderella('Karina', 19, 37),
  new Cinderella('Julia', 25, 38),
  new Cinderella('Afrona', 22, 42),
];

let prince = new Prince('Harold', 32, 39);


for (let cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
        break;
    }
}

console.log(prince);

prince.found = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);

console.log(prince);

//*Через Array.prototype. створити власний foreach, filter


Array.prototype.customForEach = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this); 
    }
};

[5, 10, 15].customForEach((value, i) => {
    console.log(`Індекс: ${i}, Значення: ${value}`);
});


Array.prototype.customFilter = function(callback) {
    let filtered = [];
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            filtered.push(this[index]);
        }
    }
    return filtered;
};

let users555 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false}
];

let activeUsers = users555.customFilter(user => user.status);
console.log(activeUsers);
console.log(biggerThan15);

