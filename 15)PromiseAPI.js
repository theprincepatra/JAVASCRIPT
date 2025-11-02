// A simple demonstration of JavaScript Promises
// and how to handle asynchronous operations.
// -----------------------------------------

// ✅ Example 1: Basic Promise
const task = new Promise((resolve, reject) => {
  let success = true; // try changing this to false to test rejection

  setTimeout(() => {
    if (success) {
      resolve("✅ Task completed successfully!");
    } else {
      reject("❌ Task failed!");
    }
  }, 1500);
});

task
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("➡️ Promise execution finished.");
  });

// -----------------------------------------

// ✅ Example 2: Promise chaining
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "Prince Patra" });
    }, 1000);
  });
}

function getPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { userId: user.id, title: "Learning Promises" },
        { userId: user.id, title: "Async JavaScript Basics" },
      ]);
    }, 1000);
  });
}

// Promise chaining example
getUser(1)
  .then((user) => {
    console.log("👤 User:", user);
    return getPosts(user);
  })
  .then((posts) => {
    console.log("📝 Posts:", posts);
  })
  .catch((err) => console.error(err));

// -----------------------------------------

// ✅ Example 3: Async/Await version
async function displayUserData() {
  try {
    const user = await getUser(2);
    console.log("👤 (Async) User:", user);

    const posts = await getPosts(user);
    console.log("📝 (Async) Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

displayUserData();

