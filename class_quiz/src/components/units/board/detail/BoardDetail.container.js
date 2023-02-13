// ----------------------------------------------------------------------------------
// BoardDetail.container - page의 js 로직 부분
// ----------------------------------------------------------------------------------

import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_PRODUCT } from "./BoardDetail.queries";

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardDetail() {
  const router = useRouter();
  console.log("router", router);
  console.log("router.query.boardID", router.query.boardID);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.boardID,
    },
  });
  console.log("data", data);

  return (
    <>
      <BoardDetailUI data={data} />
    </>
  );
}
