// use a logical operator to find whether age of a person lies between 10 & 20.

let age = prompt('What\'s your age?')
age = Number.parseInt(age)
if(age>10 && age<20){
  console.log("Age is between 10 & 20")
}
else{
  console.log("Age is not between 10 & 20")
}
