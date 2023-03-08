import { load } from "../../storage/index.mjs";

    const action = "/posts";

    export async function createPost(postData) {
        const createPostURL = API_SOCIAL_URL + action;
        const token = load("token");
        
        const response = await authfetch(createPostURL, { 
            headers:{
                
            },
            body: JSON.stringify(postData) 
        })
    }