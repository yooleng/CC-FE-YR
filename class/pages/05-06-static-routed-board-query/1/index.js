// ----------------------------------------------------------------------------------
// 05-06. static-routed-board-query-1
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  # graphql 내용 등록
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

// useMutation과 달리 useQuery는 페이지가 열리자마자 자동으로 실행됨
// 변수는 실행페이지에 설정해주어야 하므로 이동 후 페이지인 여기 코드 작성

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: 13777,
    },
  });

  console.log("data", data);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // undefined가 뜨는 이유?

  // useQuery(FETCH_BOARD)로 api를 호출하고 있다. 아무리 빨라도 시간이 소요됨
  // 이걸 기다리지 않고 바로 반환해서 data가 undefined로 뜬다.
  // 하지만, useQuery에서는 await를 쓰지 않고, data를 받으면 다시 한 번 실행해준다.
  // 네트워크 탭에서 속도를 늦춰보면 두 번 실행되는 것을 확인할 수 있다.
  // 따라서 조건부 렌더링 사용! (data && : 데이터가 있을 때 실행해줘)
  // 이렇게 비동기로 작동하는 방식이 동기로 작동하는 방식보다 훨씬 효율적이다.
  // useQuery 자체가 비동기로 짜여있기 때문에, await 써도 소용이 없다.

  return (
    <>
      <div>1번 게시글로 이동이 완료되었습니다.</div>

      {/* 조건부 렌더링 : 데이터가 있을 때 fetchBoard.~ 를 실행해줘 */}
      {/* 데이터가 없을 때에는 작성자, 제목, 내용만 보이고, */}
      {/* 데이터를 받아오면 한 번 더 실행되어 data.fetchBoard.~까지 보이게 된다. */}

      {/* && 연산자 */}
      <div>작성자: {data && data.fetchBoard.writer}</div>
      {/* 삼항연산자 */}
      <div>제목: {data ? data.fetchBoard.title : "로딩중입니다."}</div>
      {/* 옵셔널 체이닝 */}
      <div>내용: {data?.data.fetchBoard.contents}</div>
    </>
  );
}
