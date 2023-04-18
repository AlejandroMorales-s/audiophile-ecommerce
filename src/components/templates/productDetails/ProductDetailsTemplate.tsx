import React, { FC } from "react";
//* Components
import GeneralTemplate from "../generalTemplate/GeneralTemplate";
import CategorySelectors from "../../common/categorySelectors/CategorySelectors";
import AboutSection from "../../common/aboutSection/AboutSection";

interface Props {
  children: React.ReactNode;
  title: string;
}

const ProductDetailsTemplate: FC<Props> = ({ children, title }) => {
  return (
    <GeneralTemplate title={title}>
      {children}
      <CategorySelectors />
      <AboutSection />
    </GeneralTemplate>
  );
};

export default ProductDetailsTemplate;
