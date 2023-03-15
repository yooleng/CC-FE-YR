// ----------------------------------------------------------------------------------
//  day 25-02. custom-hooks - login-success
// ----------------------------------------------------------------------------------

import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../src/commons/types/generated/types";
import { MessageBox } from "../login/emotion";

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
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return (
    <>
      <MessageBox>
        <div>📌 profile page</div>
        <div>{data?.fetchUserLoggedIn.name}님, 환영합니다!</div>
      </MessageBox>
    </>
  );
}
