//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

let someText = document.createElement("p");
    someText.id = "text";
    someText.innerText = "Зникаючий текст";
    
    let btn = document.createElement("button");
    btn.innerText = "Сховати текст";

    document.body.append(someText, btn);

    btn.addEventListener("click", () => {
      someText.style.display = "none";
    });


//створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Введіть ваш вік";

    let ageBtn = document.createElement("button");
    ageBtn.innerText = "Перевірити вік";

    let message = document.createElement("p");

    document.body.append(input, ageBtn, message);

    ageBtn.addEventListener("click", () => {
      let age = parseInt(input.value);

      if (isNaN(age)) {
        message.innerText = "Скільки вам років?";
      } else if (age < 18) {
        message.innerText = "Вам ще немає 18 років";
      } else {
        message.innerText = "Вам більше ніж 18";
      }
    });


    //Створити форму з трьома полями для name, surname, age та кнопкою. 
    // При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. 
    // Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

  
const form = document.getElementById("userForm");
const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
        name: form.name.value,
        surname: form.surname.value,
        age: form.age.value
    };

    const div = document.createElement("div");
    div.innerText = `Ім'я: ${user.name}, Прізвище: ${user.surname}, Вік: ${user.age}`;
    output.appendChild(div);
});

//є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let counter = document.getElementById("numberblock");
let count = localStorage.getItem("count");
if (!count) count = 0;
else count = parseInt(count);
count++;
counter.innerText = count;
localStorage.setItem("count", count);


/*Є сторінка index.html (назва довільна), 
при відвідуванні якої в локальне сховище, 
в масив sessionsList зберігається інформація про дату та час відвідування сторінки. 
Є  сторінка sessionsListPage.html (назва довільна), 
при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. 
Інфу НЕ виводити в консоль, а малювати в DOM*/

//!!!результат у page-1 та page-2!!!



//створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const poundInput = document.getElementById("pound");
const resultEl = document.getElementById("result");

const rate = 80;

poundInput.addEventListener("input", () => {
  const pound = parseFloat(poundInput.value);
  
  if (isNaN(pound)) {
    resultEl.innerText = "0";
    return;
  }

  const pounds = pound * rate;
  resultEl.innerText = pounds;
});



/*В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт

сигнатура функції –

addToLocalStorage(arrayName:string,objToAdd:any{}):void*/


function addToLocalStorage(arrayName, objToAdd) {
  const raw = localStorage.getItem(arrayName);
  if (!raw) throw new Error('немає масиву');
  const array = JSON.parse(raw);
  array.push(objToAdd);
  localStorage.setItem(arrayName, JSON.stringify(array));
}

//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.

//При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const tableform = document.getElementById('tableForm');
const answer = document.getElementById('answer');

tableform.addEventListener('submit', (e) => {
e.preventDefault();

const rows = +tableform.rows.value;
const cols = +tableform.cols.value;
const content = tableform.content.value;

const table = document.createElement('table');

for (let i = 0; i < rows; i++) {
const tr = document.createElement('tr');

for (let j = 0; j < cols; j++) {
const td = document.createElement('td');
td.innerText = content;
tr.appendChild(td);
}

table.appendChild(tr);
}

answer.innerHTML = '';
answer.appendChild(table);
});


/**** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”

при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.

 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається*/


let block = document.getElementById("moneyblock");

let firstPrice = +localStorage.getItem("moneyblock");
let lastUpdate = +localStorage.getItem("secondPrice");

if (isNaN(firstPrice)) firstPrice = 100;
if (isNaN(lastUpdate)) lastUpdate = Date.now();

const now = Date.now();
if (now - lastUpdate > 10000) {
    firstPrice += 10;
    lastUpdate = now;}

localStorage.setItem("moneyblock", firstPrice);
localStorage.setItem("secondPrice", lastUpdate);

block.innerText = firstPrice + 'грн';

/*зробити масив на 100 об’єктів та дві кнопки prev next

при завантаженні сторінки з’являються перші 10 об’єктів.

При натисканні next виводяться наступні 10 об’єктів

При натисканні prev виводяться попередні 10 об’єктів*/

const items = [];
    for (let i = 1; i <= 100; i++) {
      items.push({id: i, name: "Об'єкт " + i});
    }

    const defaultPage = document.getElementById("output");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const pageInfo = document.getElementById("pageInfo");

    let currentPage = 1;
    const perPage = 10;

    function renderPage(page) {
      output.innerHTML = "";
      const start = (page - 1) * perPage;
      const end = start + perPage;
      const pageItems = items.slice(start, end);
      pageItems.forEach(obj => {
        const div = document.createElement("div");
        div.innerText = obj.id + " - " + obj.name;
        output.appendChild(div);
      });
      pageInfo.innerText = "Сторінка " + page;
    }

    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentPage < items.length / perPage) {
        currentPage++;
        renderPage(currentPage);
      }
    });

    renderPage(currentPage);
