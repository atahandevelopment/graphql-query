import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Header from '@/components/Header';

const client = new ApolloClient({
  uri:"http://localhost:4000",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
