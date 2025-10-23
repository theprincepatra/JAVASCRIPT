console.log("This is Promises")
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("a is less than 0.5");
    }
    else {
        setTimeout(() => {
            console.log("Yes I'm Done!");
            resolve("TPP")
        }, 3000);
    }
});

prom1.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});
