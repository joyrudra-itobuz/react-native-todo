import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Operation,
  from,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import AsyncStorage from '@react-native-async-storage/async-storage';

const graphqlServerURI = 'http://10.0.2.2:4040/graphql';

// Paste This If Not Works
//  const networkInterface = createNetworkInterface({
//   uri: `http://10.0.2.2:4040/graphql`,
// });

const httpLink = new HttpLink({uri: graphqlServerURI});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }

  if (networkError) {
    console.error(`[Joy Said error so Error]: ${networkError}`);
  }
});

const setAuthorizationHeader = async (operation: Operation) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
        app: 'app',
      },
    });
  } catch (error) {
    console.error('Error retrieving token from AsyncStorage:', error);
  }
};

const authLink = new ApolloLink((operation, forward) => {
  setAuthorizationHeader(operation);
  return forward(operation);
});

const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
