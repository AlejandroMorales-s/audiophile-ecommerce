import { useState, useEffect } from "react";
import instance from "../axios";
import { ProductFromDb } from "../commonInterfaces";

interface Props {
  category: "Headphones" | "Speakers" | "Earphones";
}

const useProductsByCategory = ({ category }: Props) => {
  const [products, setProducts] = useState<ProductFromDb[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    instance.get(`/products/category/${category.toLowerCase()}`).then((res) => {
      setProducts(res.data.reverse());
      setLoading(false);
    });
  }, [category]);

  return { products, loading };
};

export default useProductsByCategory;
