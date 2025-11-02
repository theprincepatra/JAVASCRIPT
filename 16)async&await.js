// Basic Syntax for async

// async function myFunc() {
//   let result = await somePromise();
//   console.log(result);
// }

// Basic Syntax for await(inside async)

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function doStuff() {
//   console.log("Waiting...");
//   await delay(2000); // waits for 2 seconds
//   console.log("Done waiting!");
// }
// doStuff();

// You can’t use await alone. It must be inside an async function

function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("⏰ 2 seconds done!");
    }, 2000);
  });
}

async function run() {
  console.log("1. Start");
  let message = await delay(); // waits for 2 sec
  console.log("2. " + message);
  console.log("3. End");
}

run();
// output:
// 1.Start
// 2.⏰ 2 seconds done!
// 3.End
