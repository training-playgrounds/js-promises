export {};

/**
 * Objectives for this code snippet:
 * - Demonstrate how using async / await makes making calls to multiple asynchronous functions seem synchronous.
 * - Demonstrate how try / catch now behaves the same as synchronous code.
 *       We can trigger an error, and see it get caught properly.
 */

async function listFavoriteShows() {
    try {
        const userIDs: string[] = await (await fetch('./assets/data/async-user-ids.json')).json();
        const userInfo: any = await (await fetch(`./assets/data/async-user-info.json?userID=${userIDs[0]}`)).json();
        const userPreferences: any = await (await fetch(`./assets/data/async-user-preferences.json?userID=${userInfo.id}`)).json();

        console.log(`User: ${userInfo.name} likes the following shows:`);
        userPreferences.favoriteShows.forEach((show: string) => {
            console.log(`   * ${show}`);
        });
    }
    catch(error) {
        console.error(`*** An error occurred: ${error}`);
    }
}

console.log("Before my async function");
listFavoriteShows();
console.log("After my async function");
