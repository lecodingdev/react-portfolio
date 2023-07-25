import {createClient} from "@sanity/client"

const client = createClient({
    projectId: "jwuld41g",
    dataset: "production",
    useCdn: true,
    apiVersion: '2023-07-21',
    token: import.meta.env.PUBLIC_SANITY_TOKEN,
});

export default client;