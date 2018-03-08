export {};

/**
 * Objectives for this code snippet:
 * - Define a Promise that waits to get fulfilled after a key press (or timer runs out).
 * - Demonstrate the promise handling is stopped, once fulfilled.
 */

function pressAKeyToContinue() {
    const myPromise: Promise<number> = new Promise (
        (resolve, reject) => {
            window.addEventListener('keypress', function (e) {
                resolve(e.keyCode);
            });

            window.setTimeout(() => {
                reject('Sorry, you took too long!!!');
            }, 3000);
        }
    );

    myPromise
        .then((value: number) => {
            console.log("You pressed a key with the code: " + value);
        })
        .catch((error) => {
            console.error(`Error: ${error}`);
        });
}

console.log('Press a key to continue');
pressAKeyToContinue();
console.log('Waiting for a key press...');
