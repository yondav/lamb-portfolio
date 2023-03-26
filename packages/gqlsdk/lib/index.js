import { GraphQLClient } from 'graphql-request';
import { getSdk } from './generated';
export var sanity = new GraphQLClient('https://0wrqsydr.api.sanity.io/v1/graphql/production/default');
export default function sdk() {
    // const API_TOKEN = preview
    //   ? process.env.NEXT_PUBLIC_HYGRAPH_DEV_TOKEN
    //   : process.env.NEXT_PUBLIC_HYGRAPH_PROD_TOKEN;
    // hygraph.setHeader(`authorization`, `Bearer ${API_TOKEN}`);
    try {
        return getSdk(sanity);
    }
    catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
        return error;
    }
}
export * from './generated';
