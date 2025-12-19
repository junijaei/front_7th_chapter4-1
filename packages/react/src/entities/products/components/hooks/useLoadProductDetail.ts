import { useRouter } from "../../../../router";
import { useEffect } from "react";
import { loadProductDetailForPage } from "../../productUseCase";

export const useLoadProductDetail = () => {
  const { params } = useRouter();
  const productId = params.id;
  useEffect(() => {
    if (productId) {
      loadProductDetailForPage(productId);
    }
  }, [productId]);
};
