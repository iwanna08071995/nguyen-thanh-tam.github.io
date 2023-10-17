"use client";
import { useState } from "react";
import { ConfigProvider } from "antd";

import LayoutWithHeaderFooter from "@/components/templates/LayoutWithHeaderFooter";

import { LIST_LANGUAGE } from "@/utils/constant";

import { handleOnChangeLanguageFunc } from "@/interfaces";

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
} from "@/db/dataVi";

const Home = () => {
  const [lang, setLang] = useState<string>("");

  const handleOchangeLanguage: handleOnChangeLanguageFunc = (lang) => {
    console.log("lang", lang);
  };

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
        onChangeLanguage={handleOchangeLanguage}
      />
    </ConfigProvider>
  );
};

export default Home;
