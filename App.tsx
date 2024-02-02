import React from 'react';
import Navigator from './src/Navigator';
import {ApolloProvider} from '@apollo/client';
import client from './src/apollo/apolloClient';
import {UserContextProvider} from './src/context/UserContext';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    // <GestureHandlerRootView>
    <UserContextProvider>
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    </UserContextProvider>
    // </GestureHandlerRootView>
  );
}
