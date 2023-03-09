// ----------------------------------------------------------------------------------
//  21-04. fetch-policy-component
// ----------------------------------------------------------------------------------

import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyExample() {
  // const { data } = useQuery(FETCH_BOARDS, { fetchPolicy: "network-only" }); // 언제나 새 데이터 요청
  const { data } = useQuery(FETCH_BOARDS);
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el}>{el.title}</div>
      ))}
    </>
  );
}
