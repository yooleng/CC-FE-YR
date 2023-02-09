import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App({ Component, pageProps }) {
  // 모든 페이지에서 useMutation을 사용하기 위한 설정
  // ApolloClient 공식 홈페이지에 가면 설정방법 메뉴얼이 있음

  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 나중에 할 것
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
