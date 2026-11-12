declare const process: {
    env: {
        NEXT_PUBLIC_APPWRITE_HOST_URL?: string;
        NEXT_PUBLIC_APPWRITE_PROJECT_ID?: string;
        APPWRITE_API_KEY?: string;
    };
};

const env = {
    appwrite:{
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL),
        projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        apikey: String(process.env.APPWRITE_API_KEY),
    }
}

export default env