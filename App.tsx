import React from 'react';
import Navigator from './src/Navigator';
import {ApolloProvider} from '@apollo/client';
import client from './src/apollo/apolloClient';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  );
}
