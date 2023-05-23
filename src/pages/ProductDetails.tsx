import { useParams } from "react-router-dom";
//* Templates
import ProductDetailsTemplate from "../components/templates/productDetails/ProductDetailsTemplate";
//* Hooks
import useProduct from "../hooks/useProduct";
//* Components
import ProductCard from "../components/layout/productCard/ProductCard";
import ProductInfo from "../components/common/productInfo/ProductInfo";
//* Skeletons
import ProductCardSkeleton from "../components/common/productCardSkeleton/ProductCardSkeleton";
import ProductInfoSkeleton from "../components/common/productInfoSkeleton/ProductInfoSkeleton";

const ProductDetails = () => {
  const { id } = useParams();

  const { product } = useProduct({ id });

  return (
    <ProductDetailsTemplate title={product?.name || "Product"}>
      {!product ? (
        <>
          <ProductCardSkeleton />
          <ProductInfoSkeleton />
        </>
      ) : (
        <>
          <ProductCard product={product} inProductDetails={true} />
          <ProductInfo productDetails={product.product_details} />
        </>
      )}
    </ProductDetailsTemplate>
  );
};

export default ProductDetails;
