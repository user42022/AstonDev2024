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
