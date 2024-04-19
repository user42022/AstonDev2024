// Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли): 


// 1) выведется abc так как finally не принимает аргументов и соответственнт не будет менять res,
// а также в цепочке все последующие промисы будут в состоянии fulfilled и соответственно catch отрабатываться не будет
// let promiseTwo = new Promise((resolve, reject) => {
//    resolve("a");
// });

// promiseTwo
// .then((res) => {
//    return res + "b";
// })
// .then((res) => {
//    return res + "с";
// })
// .finally((res) => {
//    return res + "!!!!!!!";
// })
// .catch((res) => {
//    return res + "d";
// })
// .then((res) => {
//    console.log(res);
// });

// 2)
// function doSmth() {
//    return Promise.resolve("123");
// }

// doSmth()
// .then(function (a) {
//    console.log("1", a); // выведется первым, выведет 1 "123"
//    return a;
// })
// .then(function (b) {
//    console.log("2", b); // выведется вторым вслед за предыдущим  2 "123"
//    return Promise.reject("321"); // выдает reject промис, который попадет в первый отлов ошибки
// })
// .catch(function (err) {
//    console.log("3", err); // выведется третим вслед за предыдущим  3 "321". промис возращает undefined  так как нет return
// })
// .then(function (c) {
//    console.log("4", c); // выведется последним  4 "undefined"
// return c;
// });

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]

// const showWithDelay = async (array) => {
//         for (let i = 0;i<array.length; i++) {
//         await new Promise((res)=>{
//             setTimeout(res, 3000);
//         })
//         console.log(i);
//     }
// }

// showWithDelay([10, 12, 15, 21])

// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)

// БОНУС ЗАДАНИЕ 
// /* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
// Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
// Promise с содержимым страницы или вызывает reject */
// fetchUrl('https://google/com&#39;)
// .then(...)
// .catch(...) // сatch должен сработать только после 5 неудачных попыток
// получить содержимое страницы внутри fetchUrl
const fetchUrl = async (url) => {
    const response = await fetch(url);
    const data = await response.text();
    console.log(data)
    return data
}

fetchUrl('https://google.com')