// ----------------------------------------------------------------------------------
//  day 30-02. login-refreshToken-success
// ----------------------------------------------------------------------------------

import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const client = useApolloClient();

  const onClickButton = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log("result", result);
  };

  return (
    <>
      <button onClick={onClickButton}>클릭 시 UseQuery 요청!</button>
    </>
  );
}
