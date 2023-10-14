import React from "react";

import Avatar from "../../atoms/Avatar";
import LayoutWrapperContent from "@/components/templates/LayoutWrapperContent";
import Info from "@/components/molecules/Info";
import Contact from "@/components/molecules/Contact";
import Divider from "@/components/atoms/Divider";
import AboutMe from "@/components/molecules/AboutMe";
import SkillsSummary from "@/components/molecules/SkillsSummary";
import SkillsList from "@/components/molecules/SkillsList/SkillsList";
import { mainProps } from "@/interfaces";
import TimeLine from "@/components/molecules/TimeLine";

import MainStyled from "./MainStyled";
import Languages from "@/components/molecules/Languages";

function Main(props: mainProps) {
  const {
    profile: {
      avatar: { size, src },
      name,
      job,
      location,
    },
    contact: { website, phone, title: titleContact, email, linkedIn },
    aboutMe: { content: contentAboutMe, title: titleAboutMe },
    skillsSummary: { title: titleSkillsSummary, content: contentSkillsSummary },
    skills: { title: titleSkills, content: contentSkills },
    libraries: { title: titleLibraries, content: contentLibraries },
    software: { title: titleSoftware, content: contentSoftware },
    education: { title: titleEducation, timeList: timeListEducation },
    languages: { title: titleLanguages, list: listLanguages },
    experience: { title: titleExperience, timeList: listExperience },
  } = props;

  return (
    <MainStyled
      className={`tw-max-w-7xl	tw-flex tw-flex-col tw-justify-between tw-container tw-mx-auto tw-px-4 `}
    >
      <LayoutWrapperContent
        leftPosition="center"
        ContentLeft={<Avatar src={src} size={size} />}
        ContentRight={<Info name={name} job={job} location={location} />}
      />
      <LayoutWrapperContent
        ContentLeft={
          <Contact
            website={website}
            phone={phone}
            title={titleContact}
            email={email}
            linkedIn={linkedIn}
          />
        }
        ContentRight={<AboutMe title={titleAboutMe} content={contentAboutMe} />}
      />
      <SkillsSummary
        title={titleSkillsSummary}
        content={contentSkillsSummary}
      />
      <Divider width="80%" className="tw-my-5" />
      <SkillsList title={titleSkills} content={contentSkills} />
      <Divider width="80%" className="tw-my-2" />
      <SkillsList title={titleLibraries} content={contentLibraries} />
      <Divider width="80%" className="tw-my-2" />
      <SkillsList title={titleSoftware} content={contentSoftware} />{" "}
      <Divider width="80%" className="tw-my-5" />
      <LayoutWrapperContent
        rightPosition="start"
        ContentLeft={
          <div>
            <TimeLine title={titleEducation} timeList={timeListEducation} />
            <Divider width="100%" className="tw-my-2" />
            <Languages title={titleLanguages} list={listLanguages} />
          </div>
        }
        ContentRight={
          <TimeLine
            isExperience={true}
            title={titleExperience}
            timeList={listExperience}
          />
        }
      />
    </MainStyled>
  );
}

Main.propTypes = {};

export default Main;
