import env from "@";

import { Client, Account, Avatars, Databases, Storage} from 'node-appwrite';

const client = new Client()
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apikey);

    const databases = new Databases(client)
    const users = new Users(client);
    const avatars = new Avatars(client);
    const storage = new Storage(client);
    
    

    
    export {
        client, databases, users, avatars, storage
    }