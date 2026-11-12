import env from "@";

import { Client, Account, Avatars, Databases, Storage} from 'node-appwrite';

const client = new Client()
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apikey);