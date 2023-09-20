import Header from "../organisms/Header";
// import Footer from "../../organisms/Footer";
// import Main from "../../organisms/Main";

import { LayoutWithHeaderFooter } from "@/interfaces";

const LayoutWithHeaderFooter: React.FC<LayoutWithHeaderFooter> = (props) => {
  const { children } = props;
  return (
    <div className="tw-flex tw-flex-col tw-h-screen">
      <Header />
      <div className="flex">123</div>
      {/* <Main>{children}</Main>
      <Footer /> */}
    </div>
  );
};

LayoutWithHeaderFooter.propTypes = {};

export default LayoutWithHeaderFooter;
