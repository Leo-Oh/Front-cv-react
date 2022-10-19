import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from './Constants';
import 'bootstrap/dist/css/bootstrap.min.css';
//const root = ReactDOM.createRoot(document.getElementById('root'));



// 1
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

// 2
const httpLink = createHttpLink({
  //uri: 'http://34.125.186.178:8109/graphql/'
  uri: 'https://leonardo-leo-oh.cloud.okteto.net/graphql/'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ''
    }
  };
});

// 3
const client = new ApolloClient({
  //link: httpLink,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// 4
ReactDOM.render(
 <BrowserRouter>
   <ApolloProvider client={client}>
     <App />
   </ApolloProvider>
 </BrowserRouter>,
 document.getElementById('root')
);