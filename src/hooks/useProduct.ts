import { useEffect, useState } from "react";
import instance from "../axios";
import { ProductFromDb } from "../commonInterfaces";

const useProduct = ({ id }: { id: string | undefined }) => {
  if (!id) return { product: null };

  const [product, setProduct] = useState<ProductFromDb | null>(null);

  useEffect(() => {
    instance.get(`/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  return { product };
};

export default useProduct;
