import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  // 라우트 정의에서 productId를 역동적 경로 세그먼트에 대한 식별자로 선택
  const productId = params.productId;

  return (
    <>
      <div>ProductDetailPage</div>
      <p>{productId}</p>
    </>
  );
};

export default ProductDetailPage;
