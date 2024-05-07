// ----------------------------------------------------------------------------------
// day 15. infinite-scroller / advanced - 무한스크롤 구현하기
// ----------------------------------------------------------------------------------

// FIXME
import { useQuery, gql } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { ScrollBox, ContentsBox, TextBox, WriterBox } from "../emotion";

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

export default function StaticRoutedPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log("data", data?.fetchBoards);

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      <ScrollBox style={{ height: "480px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchBoards.map((el) => (
            <div key={el._id}>
              <TextBox>
                <WriterBox style={{ margin: "10px" }}>{el.writer}</WriterBox>
                <ContentsBox style={{ margin: "10px" }}>{el.title}</ContentsBox>
              </TextBox>
            </div>
          )) ?? <div></div>}
        </InfiniteScroll>
      </ScrollBox>
    </>
  );
}
