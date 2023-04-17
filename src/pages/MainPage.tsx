import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/navbar/Navbar";
import Header from "../components/layout/mainHeader/Header";
import MainProducts from "../components/layout/mainProducts/MainProducts";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Home | audiophile</title>
      </Helmet>
      <Navbar />
      <Header />
      <MainProducts />
    </>
  );
};

export default MainPage;
