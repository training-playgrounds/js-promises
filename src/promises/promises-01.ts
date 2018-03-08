export {};

/**
 * Objectives for this code snippet:
 * - Define a Promise, and use the "resolve" and "reject" callback functions (the value is resolved immediately).
 * - Throw an error after the promise has been fulfilled, which gets caught by the "catch" section.
 * - Demonstrate a shortcut for defining an immediately-resolving promise.
 */

const myPromise: Promise<number> = new Promise (
    (resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 100);
        resolve(randomNumber);
        // reject(new Error("Something bad happened!"));
    }
);

myPromise
    .then((value: number) => {
        console.log("And the number is: " + value);
    })
    .catch((error: Error) => {
        console.error(error.message);
    });

console.log('Welcome to the random number generator!');