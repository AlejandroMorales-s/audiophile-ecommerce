import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/navbar/Navbar";
import Header from "../components/layout/mainHeader/Header";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Home | audiophile</title>
      </Helmet>
      <Navbar />
      <Header />
    </>
  );
};

export default MainPage;
