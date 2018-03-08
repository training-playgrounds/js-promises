import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';

export {};

/**
 * Objectives for this code snippet:
 * - Define an Observable from an array of numbers, and have an observer spit them all out.
 * - Define an Observable from a continuous stream of values.
 */

const myNumbers: number[] = [100, 3, 24, 89, 11, 7];
let myObservable$ = Observable.from(myNumbers);

// let myObservable$: Observable<number> = new Observable((subscriber: Subscriber<number>) => {
//     window.setInterval(() => {
//         const randomNumber = Math.floor(Math.random() * 100);
//         subscriber.next(randomNumber);
//     }, 1000);
// });

myObservable$.subscribe(
    (value: number) => {
        console.log("Observable value: " + value);
    }
);
