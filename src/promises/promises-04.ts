export {};

/**
 * Objectives for this code snippet:
 * - Demonstrate a parallel promise chain, where all Promises must be fulfilled before the final promise (created
 * from Promise.all) is resolved.
 */

const promise1: Promise<any> = fetch('./assets/data/person-data-1.json')
    .then((response: Response) => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }

        console.log("Fetched person-data-1.json");
        return response.json();
    });

const promise2: Promise<any> = fetch('./assets/data/person-data-2.json')
    .then((response: Response) => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }

        console.log("Fetched person-data-2.json");
        return response.json();
    });

const promise3: Promise<number> = new Promise((resolve, reject) => {
    console.log("Waiting for a key press...");

    window.addEventListener('keypress', function (e) {
        resolve(e.keyCode);
    });
});

Promise.all([promise1, promise2, promise3])
    .then((results: any[]) => {
        console.log('All promises have been resolved!!!');
        console.log('Results from promise1: ' + JSON.stringify(results[0]));
        console.log('Results from promise2: ' + JSON.stringify(results[1]));
        console.log('Results from promise3: ' + results[2]);
    })
    .catch(error => {
        console.error("Everything failed because of the error: " + error.message);
    });
