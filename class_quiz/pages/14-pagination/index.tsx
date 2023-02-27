// ----------------------------------------------------------------------------------
// day 14. Pagination
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import { useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";

const PageNumber = styled.span<{ isActive?: boolean }>`
  margin: 10px;
  color: ${({ isActive }) => (isActive ? "#3950e5" : "black")};
`;

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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // currentPage 상태 추가

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: currentPage, // 페이지 초기값 설정
    },
  });

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
      : 0;

  console.log("data", data?.fetchBoards);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const selectedPage = Number(event.currentTarget.id); // 클릭된 페이지 번호 저장
    setCurrentPage(selectedPage); // currentPage 상태 업데이트
    // void refetch({ page: Number(event.currentTarget.id) });
    void refetch({ page: selectedPage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setCurrentPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setCurrentPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}

      <span onClick={onClickPrevPage}> &lt; </span>
      {new Array(10).fill(1).map((_, index) => {
        const pageNumber = index + startPage;
        const isActive = pageNumber === currentPage;

        return (
          index + startPage <= lastPage && (
            <PageNumber
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
              isActive={isActive}
            >
              {index + startPage}
            </PageNumber>
          )
        );
      })}
      <span onClick={onClickNextPage}> &gt; </span>
    </>
  );
}
