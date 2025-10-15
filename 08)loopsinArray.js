/* 1) FORIN loop(to acces key), Syntax:
                    for(keyword key in arrayname){
                        coede to be executed
                    }
example:        */
console.log("FOR IN loop")
let object = ['T', 'A', 'P']
for (let key in object){
    console.log(key)

}

/* 2) FOROF loop(to acces value), Syntax:
                    for(keyword literal of arrayname){
                        coede to be executed
                    }
example:        */
console.log("FOR OF loop")
let obj = ['T', 'A', 'P']
for (let value in obj){
    console.log(value)

}

/* 3) FOREACH loop(to acces value mand index), Syntax:
                    forEach(vaslue, index, array){
                        coede to be executed
                    }
example:        */
console.log("FOR EACH loop")
let array = ['T', 'A', 'P']
array.forEach((value, index, array)=>{
   console.log(value, index, array)
})
