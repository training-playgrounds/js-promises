export {};

/**
 * Objectives for this code snippet:
 * - Demonstrate how async / await keywords make calls to promises act like synchronous code.
 * - Explain how functions declared as "async" actually return promises.
 */

function doSomeNetworkIntensiveOperation(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 3000);
    });
}

// Operate on the Promise as normal
function doAsyncWork() {
    // results gets the resolved promise value, and not the promise object
    doSomeNetworkIntensiveOperation()
        .then(results => {
            console.log(results);
        });
}

// By using the await keyword, the the code waits for the promise to resolve, and the resolved value is returned
// instead of the Promise object.  Any function that wants to use the "await" keyword must be flagged as "async".
// Note: all functions declared with the "async" keyword return a Promise, and any simple value returned will get
// wrapped in a Promise.
// async function doAsyncWork() {
//     // results gets the resolved promise value, and not the promise object.
//     let results: number = await doSomeNetworkIntensiveOperation();
//     console.log(results);
// }

console.log("About to call an async function");
doAsyncWork();
console.log("Async function is doing some network intensive operation...");
