import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloLink } from 'apollo-link'
import gql from 'graphql-tag'

/**
 * Create a new apollo client and export as default
 */

const http = new HttpLink({ uri: 'http://localhost:4000/' });
const delay = setContext(request => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 800)
})
);
const cache = new InMemoryCache();

const link = ApolloLink.from([
    delay,
    http
])


const client = new ApolloClient({
    link,
    cache
})


export default client;
