import { FC } from "react";
//* Helmet
import { Helmet } from "react-helmet-async";
//* Components
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../common/footer/Footer";

interface Props {
  children: React.ReactNode;
  title: string;
}

const GeneralTemplate: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title} | audiophile</title>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default GeneralTemplate;
