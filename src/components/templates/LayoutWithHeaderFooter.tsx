import Header from "../organisms/Header";
import Main from "../organisms/Main";

import {
  layoutWithHeaderFooter,
  handleOnChangeLanguageFunc,
  handleOnChangeDarkModeFunc,
} from "@/interfaces";

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
    onChangeLanguage,
    onChangeDarkMode,
  } = props;

  const handleOchangeLanguage: handleOnChangeLanguageFunc = (lang) => {
    if (onChangeLanguage) {
      onChangeLanguage(lang);
    }
  };

  const handleOnChangeDarkMode: handleOnChangeDarkModeFunc = (mode) => {
    if (onChangeDarkMode) {
      onChangeDarkMode(mode);
    }
  };

  return (
    <div className={`tw-flex tw-flex-col tw-min-h-screen tw-px-4`}>
      <Header
        listLanguage={listLanguage}
        onChangeLanguage={handleOchangeLanguage}
        onChangeDarkMode={handleOnChangeDarkMode}
      />
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
