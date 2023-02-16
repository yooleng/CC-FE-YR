// ----------------------------------------------------------------------------------
// day 8 : 컴포넌트 재사용성과 수정 프로세스
// ----------------------------------------------------------------------------------
// products - new (등록 페이지)
// ----------------------------------------------------------------------------------

import ProductsWriteComponent from "@/src/components/units/board/08-products/Products.container";

export default function ProductsNewPage() {
  return (
    <>
      <ProductsWriteComponent isEdit={false} />
    </>
  );
}
