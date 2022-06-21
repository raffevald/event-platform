import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4olx3w00gg901xkavvpcelw/master',
    cache: new InMemoryCache()
})