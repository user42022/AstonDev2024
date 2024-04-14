// Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)


function logger() {
    console.log(`I output only external context: ${this.item}`);
};

const obj = { item: "some value" };

const boundLogger1 = logger.bind(obj);
boundLogger1();
const boundLogger2 = () => logger.apply(obj);
boundLogger2();
const boundLogger3 = () => logger.call(obj);
boundLogger3();

// 3.1 Массивы:

// - Создайте массив чисел и найдите его сумму.

const  myArray = [1,2,3,4,5,6];

const returnSum = () => myArray.reduce((acc, cur) => acc + cur);
console.log(returnSum(myArray));

// - Создайте массив строк и объедините их в одну строку.

const strings = [
    'здесь',
    'хранится',
    'моя',
    'строка'
];

const joinStrings = (strArr) => strArr.join(' ');
console.log(joinStrings(strings));

// - Найдите максимальный и минимальный элементы в массиве чисел.

const numbers = [
    1243,
    0,
    -123,
    556324,
    2
];

const min = Math.min(...numbers);
const max = Math.max(...numbers);
console.log(`min: ${min}; max: ${max}`);

// 3.2 Stack (стек):

// - Реализуйте стек с использованием массива.

// Добавление элемента в стек;
// Изъятие элемента из стека;
// Получение верхнего элемента из стека без его удаления; 
// Определение на пустоту. 

class MyStack {
    collection = []

    push(value) {
        this.collection.push(value);
    }

    pop(value) {
        this.collection.pop(value);
    }

    peak() {
        return this.collection[this.collection.length-1];
    }

    isEmpty() {
        return !this.collection.length;
    }
};

const myStack = new MyStack();
console.log(`stack isEmpty: ${myStack.isEmpty()}; peak: ${myStack.peak()}`);
myStack.push(100);
console.log(`stack isEmpty: ${myStack.isEmpty()}; peak: ${myStack.peak()}`);
myStack.pop();
console.log(`stack isEmpty: ${myStack.isEmpty()}; peak: ${myStack.peak()}`);


// 3.3 Queue (очередь):

// - Реализуйте очередь с использованием массива.
// - Имитируйте работу очереди на примере ожидания на кассе.

// Вставка элемента в конец очереди;
// Удаление элемента из начала очереди;
// Получение первого элемента очереди без его удаление; 
// Определить, является ли очередь пустой. 


class MyQueue {
    collection = []

    enqueue(value) {
        this.collection.push(value);
    }

    dequeue() {
        this.collection.shift();
    }

    first() {
        this.collection[0];
    }

    isEmpty() {
        return !this.collection.length;
    }
}

const myQueue = new MyQueue();
console.log(`queue isEmpty: ${myQueue.isEmpty()}; first: ${myQueue.first()}`);
myQueue.enqueue(100);
console.log(`queue isEmpty: ${myQueue.isEmpty()}; first: ${myQueue.first()}`);
myQueue.dequeue();
console.log(`queue isEmpty: ${myQueue.isEmpty()}; first: ${myQueue.first()}`);



// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

Function.prototype.myBind = function (ctx, ...args) {
    return (...args1) => this.call(ctx,...args,...args1);
};

const myFunc = function (a, b, c) {
    console.log('this:', this);
    console.log('args:', a, b, c);
};

const myObj = {name: 'Andrey'};

const boundFunc = myFunc.myBind(myObj, 1, 'str');
boundFunc(null);
