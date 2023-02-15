// ----------------------------------------------------------------------------------
// 07. List.container - page의 js 로직 부분
// ----------------------------------------------------------------------------------

import { useQuery, useMutation } from "@apollo/client";
import ListUI from "./List.presenter";
import { DELETE_PRODUCT, FETCH_PRODUCTS } from "./List.queries";

export default function List() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  console.log("data", data?.fetchProducts);

  const onClickDelete = async (event) => {
    await deleteProduct({
      variables: {
        productId: event.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return (
    <>
      <ListUI data={data} onClickDelete={onClickDelete} />
    </>
  );
}
