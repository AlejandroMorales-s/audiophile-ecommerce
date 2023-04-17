import MainProducts from "../components/layout/mainProducts/MainProducts";
import AboutSection from "../components/common/aboutSection/AboutSection";
import CategorySelectors from "../components/common/categorySelectors/CategorySelectors";
import GeneralTemplate from "../components/templates/generalTemplate/GeneralTemplate";
import Header from "../components/layout/mainHeader/Header";

const MainPage = () => {
  return (
    <GeneralTemplate title="Home">
      <Header />
      <CategorySelectors />
      <MainProducts />
      <AboutSection />
    </GeneralTemplate>
  );
};

export default MainPage;
