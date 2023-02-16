// ----------------------------------------------------------------------------------
// day 8 ~ 9 : 컴포넌트 재사용성과 수정 프로세스
// ----------------------------------------------------------------------------------
// products - edit (수정 페이지)
// ----------------------------------------------------------------------------------

import ProductsWriteComponent from "@/src/components/units/board/08-products/Products.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// defaultValue를 설정해주기 위해 fetchProduct 쿼리 추가
// (등록했던 값을 수정하려고 했을 때 그 값이 남아있길 원하는 것이므로)

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function ProductsEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.number,
    },
  });

  return (
    <>
      {/* data props로 넘겨주기! */}
      <ProductsWriteComponent isEdit={true} data={data} />
    </>
  );
}
