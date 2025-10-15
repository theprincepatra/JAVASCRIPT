// for map()
console.log("MAP()....")
let arr = [1, 2, 9, 47, 5]
// for map()
/*let newArr = []
for(let index = 0; index<arr.length; index++){
    newArr.push(arr[index]**2)
}   instead of  this long method....*/
let newArr = arr.map((Element)=>{
    return Element**2
})
console.log(`Original array-> ${arr}`)
console.log(`Squared array-> ${newArr}`)

// for filter()
console.log("FILTER()....")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.filter((value) => {
  return value > 5;
});
console.log("Original array:", numbers);
console.log("Filtered array (values > 5):", result);

// for REDCUCE()
console.log("REDCUCE()...")
let number = [10, 20, 30];
let red = number.reduce((acc, value) => {
  return acc + value;
}, 0); // initial value of accumulator is 0
console.log(red)
