// Написать по 2 примера создания примитивных значений
// (если есть несколько способов - использовать)
// (string, number, boolean, null, undefined, symbol, bigInt)

// string
const str1 = 'одинарные ковычки'
const str2 = 'двойные ковычки'
const str3 = `${str1+str2}`
const str4 = String(true) // делает явное преобразование в строку из любого другого типа

// number
const num1 = 0
const num2 = Number(true)

// boolean
const bool1 = false
const bool2 = Boolean(1)

// null
const null1 = null

// undefined
let undef1
const undef2 = undefined // undef1===undef2

// symbol
const sym1 = Symbol()

//bigInt
const bigInt1 = 12n
const bigInt2 = BigInt(12)



const res = "B" + "a" + (1 - "hello");
console.log(res); // BaNaN  -  
// (1 - "hello") - будет выполнено преобразование к числу из-за оператора '-',
// что даст в итоге NaN, т.к. "hello" - будет приведено к NaN, а 1-NaN будет NaN

const res2 = (true && 3) + "d";
console.log(res2); // 3d -
// (true && 3) - оператор "&&"(И) - возвращает либо 1ый операнд который приведется
// к логическому false либо последний  операнд который приведется к логическому true
// т.е. вернет число 3

const res3 = Boolean(true && 3) + "d";
console.log(res3); // trued - 
// true && 3 - вернет число 3, которое в дальнейшем явно преобразуется в логическое значение true
// true + 'd' - произойдет конкатенация, и true преобразуется для этого в строку 'true'