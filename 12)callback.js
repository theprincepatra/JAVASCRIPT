function doSomethingLater(callback) {
  // now callback = sayHello (function)
  console.log("Doing something... Please wait.");

  setTimeout(() => {
    console.log("Done!");
    callback();  // actually: sayHello();
  }, 2000);
}

function sayHello() {
  console.log("Hello, TPP!");
}

doSomethingLater(sayHello);
