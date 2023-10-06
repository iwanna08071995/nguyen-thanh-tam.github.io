import React from "react";

import Avatar from "../../atoms/Avatar";
import LayoutWrapperContent from "@/components/templates/LayoutWrapperContent";
import Info from "@/components/molecules/Info";
import Contact from "@/components/molecules/Contact";
import { MainProps } from "@/interfaces";

import MainStyled from "./MainStyled";
import AboutMe from "@/components/molecules/AboutMe";
import SkillsSummary from "@/components/molecules/SkillsSummary";

function Main(props: MainProps) {
  const {
    profile: {
      avatar: { size, src },
      name,
      job,
      location,
    },
    contact: { website, phone, title: titleContact, email },
    aboutMe: { content: contentAboutMe, title: titleAboutMe },
    skillsSummary: { title: titleSkillsSummary, content: contentSkillsSummary },
  } = props;

  return (
    <MainStyled className="tw-max-w-7xl	tw-flex tw-flex-col tw-justify-between tw-container tw-mx-auto tw-px-4">
      <LayoutWrapperContent
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
          />
        }
        ContentRight={<AboutMe title={titleAboutMe} content={contentAboutMe} />}
      />
      <SkillsSummary
        title={titleSkillsSummary}
        content={contentSkillsSummary}
      />
    </MainStyled>
  );
}

Main.propTypes = {};

export default Main;
