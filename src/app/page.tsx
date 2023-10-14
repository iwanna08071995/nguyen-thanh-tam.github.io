"use client";
import { ConfigProvider } from "antd";

import layoutWithHeaderFooter from "@/components/templates/layoutWithHeaderFooter";
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
      <layoutWithHeaderFooter
        listLanguage={LIST_LANGUAGE}
        profile={profile}
        contact={contact}
        aboutMe={aboutMe}
        skillsSummary={skillsSummary}
        skills={skills}
        libraries={libraries}
        software={software}
        education={education}
      />
    </ConfigProvider>
  );
};

export default Home;
