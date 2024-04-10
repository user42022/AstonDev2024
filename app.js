'use strict'

// Для выполнения задания создаем новую ветку в вашем репозитории с именованием - homeWork_02, после выполнения д/з - прикрепляем ссылку к сдаче задания.

// Задание 1 – Создать объект counter всеми возможными способами;

const counter1 = { prop1: 'val1' };
const counter2 = new Object();
counter2.prop1 = 'val1';
const counter3 = Object.create(Object.prototype, { prop1: { value: 'val1', enumerable: true, writable: true, configurable: true } });
const counter4 = Object.assign({}, counter1);

// console.log([counter1, counter2, counter3, counter4]);

const notEnumObj = Object.create(Object.prototype, { prop1: { value: 'val1' } }); // создал обьект с неперечисляемыми свойствами

// Задание 2 – Скопировать объект counter всеми
// возможными способами;

const counter1Copy = { ...counter1 };
const counter2Copy = Object.assign({}, counter2);
const notEnumObjCopy = Object.create(Object.prototype, Object.getOwnPropertyDescriptors(notEnumObj));
const counter3Copy = JSON.parse(JSON.stringify(counter3));

// console.log(notEnumObjCopy.hasOwnProperty('prop1'))
// console.log([counter1Copy, counter2Copy, counter3Copy])

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounter() {
  console.log('functional declaration');
};
const makeCounter1 = function () {
  console.log('functional expression');
};
const makeCounter2 = () => console.log('arrow function');

// Задание 4 - прочитать и описать работу глобальной функции structuredClone()



// Бонус
// Задание 1 –
// Написать функцию глубокого сравнения двух объектов:


const obj1 = {
  here: {
    is: "on",
    other: "3"
  },
  object: "Y",
};

const obj2 = {
  here: {
    is: "on",
    other: "2"
  },
  object: "Y",
};

const deepEqual =
  (obj1, obj2) => {
    for (const key in obj1) {
      if (typeof obj1[key] !== 'object' && obj1[key] !== obj2[key]) {
        return false;
      };
      if (typeof obj1[key] === 'object' && !deepEqual(obj1[key], obj2[key])) {
        return false;
      };
    };
    return true;
  };

console.log(deepEqual(obj1, obj2), obj1, obj2);
// Бонус 
// Задание 2 –
// Развернуть строку в обратном направлении при помощи методов массивов:

function reverseStr(str) {
  return str.split('').reverse().join('');
};

console.log(reverseStr('reverse this string'));