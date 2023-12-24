// src/services/PocketBaseService.js
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090'); // Ändern Sie dies zu Ihrer PocketBase-URL

const api_token = "test";

export async function authenticate(usernameOrEmail, password) {
    try {
        const authData = await pb.collection("users").authWithPassword(usernameOrEmail, password);

        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model.id);
        return authData;
    } catch (error) {
        console.error("Authentication failed", error);
        throw error;
    }
}

export async function register(email, username, password) {
    try {
        const data = {
            email,
            password,
            passwordConfirm: password,
            name: username,
        };
        const registerData = await pb.collection('users').create(data);

        return registerData;
    } catch (err) {
        console.error(err);
        // Weiterleiten des Fehlers an den Aufrufer
        throw err;
    }
}

export async function logout() {
    pb.authStore.clear();
}


// function to authenticate as admin to prevent access from non admin users
// async function authenticateAsAdmin() {
//     const authData = await pb.admins.authWithPassword('s.ulu@mail.de', 'EYV*yzg3rum4xwc!yqe');

//     return authData;
// }

export async function getPosts() {
    
    // you can also fetch all records at once via getFullList
    const records = await pb.collection('posts').getFullList({
        headers: {
            'x_token': api_token,
        },
    });

    return records;
}
