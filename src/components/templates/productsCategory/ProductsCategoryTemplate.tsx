import { FC } from "react";
//* Templates
import GeneralTemplate from "../generalTemplate/GeneralTemplate";
//* Components
import ProductCardSkeleton from "../../common/productCardSkeleton/ProductCardSkeleton";
import ProductCard from "../../layout/productCard/ProductCard";
import CategorySelectors from "../../common/categorySelectors/CategorySelectors";
import AboutSection from "../../common/aboutSection/AboutSection";
//* Hooks
import useProductsByCategory from "../../../hooks/useProductsByCategory";
//* Styles
import style from "./ProductsCategoryTemplate.module.scss";

interface Props {
  categoryName: "Headphones" | "Speakers" | "Earphones";
}

const ProductsCategoryTemplate: FC<Props> = ({ categoryName }) => {
  const { products, loading } = useProductsByCategory({
    category: categoryName,
  });

  return (
    <GeneralTemplate title={categoryName}>
      <header className={style["category-header-container"]}>
        <div className={style["category-header"]}>
          <h2>{categoryName}</h2>
        </div>
      </header>
      <section className={style["products-category-container"]}>
        {loading ? (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : (
          <>
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </>
        )}
      </section>
      <CategorySelectors />
      <AboutSection />
    </GeneralTemplate>
  );
};

export default ProductsCategoryTemplate;
