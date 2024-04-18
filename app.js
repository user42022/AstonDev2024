// 1) Какие бывают алгоритмы сортировок ?

// пузырьковая сортировка - проходимся по массиву сравнивая соседние элементы,
// если правый элемент меньше левого то меняем их местами. проходимся циклом n раз.
// Временная сложность O(n^2)

// быстрая сортировка - выбираем опорный элемент, проходимся по массиву.
// если элемент больше опорного - кидаем его в правый вспомогательный массив, иначе - в левый вспомогательный
// делаем быструю сортировку для левого и правого массива и потом соединяем вместе с опорным элементом в отсортированный массив
// временная сложность варьируется - в худшем случае  O(n^2), в среднем O(n log n), в лучшем O(n)
// сложность по памяти O(n)

// Сортировка слиянием - разбиваем массив  на n массивов состоящих из одного элемента.
//соседние массивы соединяем в общий массив, при этом проводя проверку левых элементов:
// [1,3,2,4]-> [[1],[3],[2],[4]] -> [[1,3] [2,4]]: 
// 1/  общий массив = []  левый массив = [1,3]  правый массив = [2,4] сравниваем 1 и 2
// 2/  общий массив = [1]  левый массив = [-,3]  правый массив = [2,4] сравниваем 3 и 2
// 3/  общий массив = [1,2]  левый массив = [-,3]  правый массив = [-,4] сравниваем 3 и 4
// 4/  общий массив = [1,2,3]  левый массив = [-,-]  правый массив = [-,4] сравниваем - и 4
// 5/  общий массив = [1,2,3,4]  левый массив = [-,-]  правый массив = [-,-]
// делаем так пока не вернемся к одному массиву
// Временная сложность всегда O(n log n)
// Сложность по памяти O(n)

// 2) Прочитать про "Операторы и выражения, циклы в JS"


// 3) Создать объект Person несколькими способами
// после создать объект Person2, чтобы в нём были доступны методы объекта Person.
// Добавить метод logInfo чтоб он был доступен всем объектам.


const logInfo = function () {
    console.log('logInfo: ',this.name)
}

const sayHello = function () {
    console.log(`hi it's ${this.name}`)
}

const protoPerson = {
    logInfo
}


// Person
const person1_1 = {
    name: 'Person1_1',
    sayHello
}
Object.setPrototypeOf(person1_1, protoPerson)

const person1_2 = Object.create(Object.prototype,{
    name:{
        value:'Person1_2',
        enumerable:true,
        writable:true,
        configurable:true
    },
    sayHello:{
        value: sayHello,
        enumerable:true,
        writable:true,
        configurable:true,
}
})
Object.setPrototypeOf(person1_2, protoPerson)

const person1_3 = Object.assign({}, {
    name: 'Person1_3',
    sayHello
})
Object.setPrototypeOf(person1_3, protoPerson)

const person1_4 = new Object()
person1_4.name = 'Person1_4'
person1_4.sayHello = sayHello
Object.setPrototypeOf(person1_4, protoPerson)


function Person1_5 () {
    this.name = 'Person1_5'; 
    this.sayHello = sayHello
}
const person1_5 = new Person1_5();

Person1_5.prototype.logInfo = logInfo

class Person1_6 {
    constructor(){
        this.name = 'Person1_6'
    }
    sayHello() {
        console.log(`hi it's ${this.name}`)
    }
    logInfo() {
        console.log('logInfo: ',this.name)
    }
}
const person1_6 = new Person1_6()


const person2  = {name: 'Person2_1'}

Object.setPrototypeOf(person2,person1_1)
person1_1.sayHello()
person2.sayHello()
person1_1.logInfo()
person2.logInfo()

// 4) Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class PersonThree {
    constructor(name) {
        this._name = name
    }

    set name(value) {
        if (!value) throw new Error('invalid name')
        this._name = value
    }

    get name() {
        return this._name
    }
}
const p3 = new PersonThree('Person3')
console.log(p3.name)
p3.name = 'newName'
console.log(p3.name)

class PersonFour extends Person1_6 {
    constructor(name) {
        super()
        this.name = name
    }
}
const personFour = new PersonFour('Person4')
personFour.logInfo()
// БОНУС: 
// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
//result = [4, 9]


const firstSum = (arr, total) => {
    const obj = {}
    arr.forEach(e=>{
        if (!(e in obj)) {
            obj[e] = {
                value: e,
                repeats: 1
            }
        } else {
            obj[e].repeats++
        }
    })
    for (const el of arr) {
        const rest = total - el
        if ((rest in obj) && ((rest===el && obj[el].repeats>1) || rest !== el )) return [el, rest]
    }
    return null
}
// Временная сложность O(n) сложность по памяти O(n)




// const firstSum = (arr, total) =>{
//         for (const el1 of arr) {
//             for (const el2 of arr) {
//                 if ((el1+el2)===total) return [el1,el2]
//             }
//         }
//         return null
//     }
// Временная сложность O(n^2)







// const binarySearch = (arr, target, start=0, end=arr.length-1) => {
//     const length = end - start +1
//     const middle = start + Math.floor(length/2)
//     if (start===end) {
//         return arr[start]===target? true: false
//     }
//     if (arr[middle] === target) {
//         return middle
//     } else if (arr[middle] < target) {
//         return binarySearch(arr,target,middle+1, end)
//     } else if (arr[middle] > target) {
//         return binarySearch(arr,target,start, middle-1)
//     }
//     return false;
// }

// const merge = (left,right) => {
//     const merged = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             merged.push(left.shift())
//         } else {
//             merged.push(right.shift())
//         }
//     }
//     return [...merged, ...left, ...right]
// }

// const sortArray = (unsorted) => {
//     if (unsorted.length < 2) return unsorted;
//     const middle = Math.floor(unsorted.length/2)
//     const left = unsorted.slice(0,middle);
//     const right = unsorted.slice(middle)
//     return merge(sortArray(left), sortArray(right))
// }



// const firstSum = (arr, total) =>{

//         const sorted = sortArray(arr)

//         for (const el of sorted) {
//             const rest = total - el;
//             if (binarySearch(sorted,rest)) return [el,rest]
//         }           
//         return null
//     }

// Временная сложность O(n log n). также, если будет неотсортированный массив,
// то данная функция не будет корректно отображать результат, так как в исходном массиве
// могут быть элементы гораздо раньше стоять  которые в сумме дают заданую сумму
firstSum(arr,total)
console.log(firstSum(arr,total))










// const arr = new Array(1000000).fill(0);
// arr.forEach((e,i)=> arr[i]=i)

// const sum = 1999997

// const showFirst = (array, sum) =>{
//     const obj = {}
//     array.forEach(e=>obj[e]=e)
//     for (const el of array) {
//         const rest = sum - el
//         if (rest in obj) return [el, rest]
//     }
//     return null
// }

// const showFirst = (array, sum) =>{
//     for (const el1 of array) {
//         for (const el2 of array) {
//             if ((el1+el2)===sum) return [el1,el2]
//         }
//     }
//     return null
// }

// console.log(showFirst(arr,sum))