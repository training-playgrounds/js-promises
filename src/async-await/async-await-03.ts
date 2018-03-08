export {};

/**
 * Objectives for this code snippet:
 * - Show how the code would look without async / await
 */

function listFavoriteShows() {
    fetch('./assets/data/async-user-ids.json')
        .then((response: Response) => {
            return response.json();
        })
        .then((userIDs: string[]) => {
            return fetch(`./assets/data/async-user-info.json?userID=${userIDs[0]}`);
        })
        .then((response: Response) => {
            return response.json();
        })
        .then((userInfo: any) => {
            return fetch(`./assets/data/async-user-preferences.json?userID=${userInfo.id}`)
                .then((response: Response) => {
                    return response.json();
                })
                .then((userPreferences: any) => {
                    console.log(`User: ${userInfo.name} likes the following shows:`);
                    userPreferences.favoriteShows.forEach((show: string) => {
                        console.log(`   * ${show}`);
                    });
                });
        })
        .catch((error) => {
            console.error(`An error occurred: ${error}`);
        })
}

console.log("Before my async function");
listFavoriteShows();
console.log("After my async function");
