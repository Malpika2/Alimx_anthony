import React from 'react'
import apolloClient from './apolloSetup';
import { ApolloProvider } from '@apollo/react-hooks';

import Chat from './components/Chat';
export const App = () => (
        <ApolloProvider client={apolloClient}>
            <div className="row justify-content-center">
                <Chat /> 
            </div>
        </ApolloProvider>
    ); 
export default App;

