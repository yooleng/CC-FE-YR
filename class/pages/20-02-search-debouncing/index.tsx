// ----------------------------------------------------------------------------------
//  20-02. search-debouncing
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log("data", data?.fetchBoards);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
    // 검색에서 refetch 할 때, 사용한 search 검색어가 저장되어 있는 상태이므로 추가로 search를 포함시키지 않아도 됨
  };

  // 검색어를 포함한 내용으로 refetch - 페이지네이션도 다시 처리
  // onChange가 될 때마다 refetch가 되는 것이 아니라, debouncing이 되도록 수정

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 1000);
  // 1초 이내에 아무것도 입력되지 않으면 마지막에 refetch 1번 실행
  // 실무에서는 보통 200이나 500정도 사용 (1초는 좀 느림)

  // const onClickSearch = () => {
  //   void refetch({ search, page: 1 });
  // };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value)
    getDebounce(event.target.value);
  };

  return (
    <>
      {/* 검색 버튼 추가 */}
      검색어 입력 : <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {/* 목록 */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}
      {/* 페이지네이션 - map 사용해서 리팩토링하기 */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {" "}
          {index + 1}{" "}
        </span>
      ))}
    </>
  );
}
