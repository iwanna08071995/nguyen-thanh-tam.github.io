import Header from "../organisms/Header";
import Divider from "../atoms/Divider";
// import Footer from "../../organisms/Footer";
import Main from "../organisms/Main";

import { LayoutWithHeaderFooter } from "@/interfaces";

const LayoutWithHeaderFooter = (props: LayoutWithHeaderFooter) => {
  const { listLanguage, profile } = props;
  return (
    <div className={`tw-flex tw-flex-col tw-h-screen tw-px-4 `}>
      <Header listLanguage={listLanguage} />
      <Divider className="tw-my-2" width="100%" />
      <Main profile={profile} />
    </div>
  );
};

export default LayoutWithHeaderFooter;
