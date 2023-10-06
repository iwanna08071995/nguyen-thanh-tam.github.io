import Header from "../organisms/Header";
import Divider from "../atoms/Divider";
// import Footer from "../../organisms/Footer";
import Main from "../organisms/Main";

import { LayoutWithHeaderFooter } from "@/interfaces";

const LayoutWithHeaderFooter = (props: LayoutWithHeaderFooter) => {
  const { listLanguage, profile, contact, aboutMe, skillsSummary } = props;
  return (
    <div className={`tw-flex tw-flex-col tw-min-h-screen tw-px-4 `}>
      <Header listLanguage={listLanguage} />
      <Main
        profile={profile}
        contact={contact}
        aboutMe={aboutMe}
        skillsSummary={skillsSummary}
      />
      <div className="tw-h-8" />
    </div>
  );
};

export default LayoutWithHeaderFooter;
