import Header from "../organisms/Header";
import Divider from "../atoms/Divider";
// import Footer from "../../organisms/Footer";
// import Main from "../../organisms/Main";

import { LayoutWithHeaderFooter } from "@/interfaces";

const LayoutWithHeaderFooter = (props: LayoutWithHeaderFooter) => {
  const { children, listLanguage } = props;
  return (
    <div className={`tw-flex tw-flex-col tw-h-screen tw-px-4 `}>
      <Header listLanguage={listLanguage} />
      <Divider className="tw-my-2" width="64%" />
      <div className="tw-flex tw-container tw-mx-auto">123</div>
      {/* <Main>{children}</Main>
      <Footer /> */}
    </div>
  );
};

export default LayoutWithHeaderFooter;
