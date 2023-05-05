// const add = (function () {
//     let counter = 0
//     return function () {
//         counter += 1
//         return counter
//     }
// })()

// const d = add

// console.log(d())
// console.dir(d)

// const add2 = function () {
//     let counter = 0
//     return function () {
//         counter += 1
//         return counter
//     }
// }

// const myFunc = add2()

// console.log(myFunc())
// console.log(myFunc())
// console.log(myFunc())
// console.log(myFunc())
// console.dir(myFunc)

// let person = {
//     name: 'dibbo',
// }

// let person2 = {
//     name: 'sagor',
// }
// let getAge = () => {}

// console.log(Function.prototype == Object.prototype)

// Object
// Boolean
// Function
// String
// Number

// // Object.hasOwnProperty()
// // Object.getPrototypeOf()
// // Object.hasOwnProperty()

// let obj = Object.create(null)
// let obj2 = {}

// console.log(obj2)
2
function sayHello(action) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < 100000; i++) {
                console.log(i)
            }
            resolve(action())
        }, 3000)
    })
}

// async function myFunc() {
//     console.log('before')
//     await
//     console.log('after')
// }

sayHello(() => {
    return 'hello World'
}).then((res) => {
    console.log(res)
})
