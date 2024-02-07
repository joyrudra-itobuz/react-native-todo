import React from 'react';
import Navigator from './src/Navigator';
import {ApolloProvider} from '@apollo/client';
import client from './src/apollo/apolloClient';
import {UserContextProvider} from './src/context/UserContext';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = gestureHandlerRootHOC(() => {
  return (
    // <GestureHandlerRootView>
    <UserContextProvider>
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    </UserContextProvider>
    // </GestureHandlerRootView>
  );
});

export default App;
