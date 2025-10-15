console.log("FACTORIAL........")
let a = Number(prompt("Enter the number:"))
let fac = 1
function factorial(number){
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))a
