import {createClient} from "@sanity/client"

const client = createClient({
    projectId: "jwuld41g",
    dataset: "production",
    useCdn: true,
    apiVersion: '2023-07-21',
});

export default client;