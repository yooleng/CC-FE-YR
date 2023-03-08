// ----------------------------------------------------------------------------------
//  day 20. search
// ----------------------------------------------------------------------------------

import { useQuery, gql } from "@apollo/client";
import { useState, MouseEvent, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import {
  ContextBox,
  ListBox,
  TextBox,
  WriterBox,
  ContentsBox,
  PageNumber,
} from "./emotion";
import { SearchOutlined } from "@ant-design/icons";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

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

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log("data", data?.fetchBoards);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <ContextBox>
        <SearchOutlined style={{ margin: "10px" }} />
        검색어 입력 : <input type="text" onChange={onChangeSearch} />
        <ListBox>
          {data?.fetchBoards.map((el) => (
            <div key={el._id}>
              <TextBox>
                <WriterBox>{el.writer}</WriterBox>
                <ContentsBox>
                  {el.title
                    .replaceAll(keyword, `#$%${keyword}#$%`)
                    .split("#$%")
                    .map((el) => (
                      <span
                        key={uuidv4()}
                        style={{ color: el === keyword ? "red" : "black" }}
                      >
                        {el}
                      </span>
                    ))}
                </ContentsBox>
              </TextBox>
            </div>
          ))}
        </ListBox>
        {new Array(10).fill(1).map((_, index) => (
          <PageNumber
            key={index + 1}
            id={String(index + 1)}
            onClick={onClickPage}
          >
            {index + 1}
          </PageNumber>
        ))}
      </ContextBox>
    </>
  );
}
