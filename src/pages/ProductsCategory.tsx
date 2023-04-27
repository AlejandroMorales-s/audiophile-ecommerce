import { FC } from "react";
import ProductsCategoryTemplate from "../components/templates/productsCategory/ProductsCategoryTemplate";

interface Props {
  categoryName: "Headphones" | "Speakers" | "Earphones";
}

const ProductsCategory: FC<Props> = ({ categoryName }) => {
  return <ProductsCategoryTemplate categoryName={categoryName} />;
};

export default ProductsCategory;
