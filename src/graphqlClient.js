import {GraphQLClient} from "graphql-request";
import {Global} from "./constants/global";

const url = 'https://jequeri.stepzen.net/api/pouring-wolverine/__graphql'

const client = new GraphQLClient(url, {
    headers: {
        Authorization:
            `apikey ${Global.GRAPHQL_API_KEY}`
    }
})

export default client;