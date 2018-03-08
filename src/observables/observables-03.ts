export {};

/**
 * Objectives for this code snippet:
 * - Demonstrate setting up a pipeline based on a set of ongoing input values.
 * - Apply a map and a filter
 * - Show how the complete callback is called when the Observable knows the stream has ended.
 */

import { Observable } from 'rxjs/Observable';

let keypressObservable$: Observable<any> = Observable
    .fromEvent(document, 'keypress')
//     .map((value: KeyboardEvent) => {
//         return value.key;
//     })

//     .filter((value) => {
//         if (value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u') {
//             return false;
//         }
//
//         return true;
//     })

//     .take(10)
// ;

keypressObservable$.subscribe(
    (value) => {
        console.log('Key: %O', value);
    },
    (error) => {
        console.log(error);
    },
    () => {
        console.log('My fork is clean, I\'m going home!');
    }
);

