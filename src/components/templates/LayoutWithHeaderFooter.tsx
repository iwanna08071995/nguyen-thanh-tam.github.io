import Header from "../organisms/Header";
import Main from "../organisms/Main";

import { layoutWithHeaderFooter } from "@/interfaces";

const layoutWithHeaderFooter = (props: layoutWithHeaderFooter) => {
  const {
    listLanguage,
    profile,
    contact,
    aboutMe,
    skillsSummary,
    skills,
    libraries,
    software,
    education,
    languages,
    experience,
  } = props;
  return (
    <div className={`tw-flex tw-flex-col tw-min-h-screen tw-px-4 `}>
      <Header listLanguage={listLanguage} />
      <Main
        profile={profile}
        contact={contact}
        aboutMe={aboutMe}
        skillsSummary={skillsSummary}
        skills={skills}
        libraries={libraries}
        software={software}
        education={education}
        languages={languages}
        experience={experience}
      />
      <div className="tw-h-8" />
    </div>
  );
};

export default layoutWithHeaderFooter;
