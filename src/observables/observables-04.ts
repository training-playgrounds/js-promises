export {};

/**
 * Objectives for this code snippet:
 * - Demonstrate creating an Observable based on a Promise.
 */

import { Observable } from 'rxjs/Observable';

let myPromise = new Promise<string>((resolve) => {
    console.log("A message will appear in 2 seconds...");

    setTimeout(() => {
        resolve("Hello from myPromise!!!");
    }, 2000);
});

Observable
    .fromPromise(myPromise)
    .subscribe(
        (next: string) => {
            console.log("Message from promise: " + next);
        },
        (error) => {
            console.log(error);
        },
        () => {
            console.log('Sorry, no more messages to show.');
        }
    );

