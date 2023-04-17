import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/navbar/Navbar";
import Header from "../components/layout/mainHeader/Header";
import MainProducts from "../components/layout/mainProducts/MainProducts";
import Footer from "../components/common/footer/Footer";
import AboutSection from "../components/common/aboutSection/AboutSection";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Home | audiophile</title>
      </Helmet>
      <Navbar />
      <Header />
      <MainProducts />
      <AboutSection />
      <Footer />
    </>
  );
};

export default MainPage;
