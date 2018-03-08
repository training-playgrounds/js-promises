export {};

/**
 * Objectives for this code snippet:
 * - Demonstrate that the call to "fetch" returns a promise, which resolves to a Response object.
 * - Demonstrate a "promise chain".
 * - Demonstrate how response.json() returns a promise, which resolves to a JSON object.
 */

fetch('./assets/data/moms-disposition.json')
    .then((response: Response) => {
        return response.json(); // note: response.json() returns a promise, that resolves to a JSON object
    })
    .then((json: any) => {
        const isMomHappy: boolean = json.isMomHappy;

        if (isMomHappy) {
            return fetch('./assets/data/phone-details.json');
        } else {
            throw new Error('Mom is not happy');
        }
    })
    .then((response: Response) => {
        return response.json();
    })
    .then((phoneInfo: any) => {
        console.log('My mom gave me a shiny new phone: ' + JSON.stringify(phoneInfo));
    })
    .catch(error => {
        console.error('Sorry, no phone: ' + error.message);
    });
