const add = (function () {
    let counter = 0
    return function () {
        counter += 1
        return counter
    }
})()

const d = add

console.log(d())
console.dir(d)

const add2 = function () {
    let counter = 0
    return function () {
        counter += 1
        return counter
    }
}

const myFunc = add2()

console.log(myFunc())
console.log(myFunc())
console.log(myFunc())
console.log(myFunc())
console.dir(myFunc)
