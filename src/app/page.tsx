"use client";
import { ConfigProvider } from "antd";

import LayoutWithHeaderFooter from "@/components/templates/LayoutWithHeaderFooter";

import { LIST_LANGUAGE } from "@/utils/constant";
import {
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
} from "@/db/data";

const Home = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "--font-display",
        },
      }}
    >
      <LayoutWithHeaderFooter
        listLanguage={LIST_LANGUAGE}
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
    </ConfigProvider>
  );
};

export default Home;
