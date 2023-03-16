// ----------------------------------------------------------------------------------
//  26-04. apollo-cache-state - ref
// ----------------------------------------------------------------------------------

import { useQuery, gql, useMutation } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

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

// 캐시에 저장되는 데이터와 요청 후 받아오는 값이 일치되어야 합니다.
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  // 삭제 함수
  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        // 캐시를 수정한다는 뜻의 cache.modify
        cache.modify({
          // 캐시에있는 어떤 필드를 수정할 것 인지 key-value 형태로 적어줍니다.
          fields: {
            fetchBoards: (prev, { readField }) => {
              const deletedId = data.deleteBoard; // 삭제된ID
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId // el._id가 안되므로, readField를 사용해서 꺼내오기
              );
              return [...filteredPrev]; // 삭제된ID를 제외한 나머지 9개만 리턴
            },
          },
        });
      },
    });
  };

  // 등록 함수
  const onClickCreate = () => {
    void createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        // 캐시를 수정한다는 뜻의 cache.modify
        cache.modify({
          // 캐시에있는 어떤 필드를 수정할 것 인지 key-value 형태로 적어줍니다.
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
