export {};

/**
 * Objectives for this code snippet:
 * - Demonstrate setting up a pipeline of operators, which each returns an observable.
 * - Show an example of a "Marble Diagram" (See: http://reactivex.io/rxjs/manual/overview.html#marble-diagrams).
 * - Show how to use the "Find the right Operator" tool found at: http://reactivex.io/rxjs/
 */

import { Observable } from 'rxjs/Observable';

const myNumbers: number[] = [100, 3, 24, 89, 11, 7];

let myObservable$ = Observable
    .from(myNumbers)

    // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-do
    // .do(value => {
    //     console.log("Spying on baseObservable$ value: %O", value);
    // })

    // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-map
    // .map((value: number, index: number) => {
    //     return value * 2;
    // })

    // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-filter
    // .filter((value: number, index: number) => {
    //     return value > 30;
    // })

    // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-reduce
    // .reduce((accumulator: number, value: number, index: number) => {
    //     return accumulator += value;
    // })
;

myObservable$.subscribe(
    (value: number) => {
        console.log("Observable value: " + value);
    }
);
