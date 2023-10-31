"use client";
import { useState, useEffect } from "react";
import { ConfigProvider } from "antd";

import i18n from "../lib/i18n";
import LayoutWithHeaderFooter from "@/components/templates/LayoutWithHeaderFooter";

import { LIST_LANGUAGE, LANGUAGES } from "@/utils/constant";
import { deepClone, saveDataToLocalStorage } from "@/utils/helpers";

import {
  handleOnChangeLanguageFunc,
  handleUpdateDataFunc,
  mainProps,
} from "@/interfaces";

import {
  profile as profileVi,
  contact as contactVi,
  aboutMe as aboutMeVi,
  skillsSummary as skillsSummaryVi,
  skills as skillsVi,
  libraries as librariesVi,
  software as softwareVi,
  education as educationVi,
  languages as languagesVi,
  experience as experienceVi,
} from "@/db/dataVi";

import {
  profile as profileEn,
  contact as contactEn,
  aboutMe as aboutMeEn,
  skillsSummary as skillsSummaryEn,
  skills as skillsEn,
  libraries as librariesEn,
  software as softwareEn,
  education as educationEn,
  languages as languagesEn,
  experience as experienceEn,
} from "@/db/dataEn";

const { EN } = LANGUAGES;

const Home = () => {
  const [data, setData] = useState<mainProps>({
    profile: profileEn,
    contact: contactEn,
    aboutMe: aboutMeEn,
    skillsSummary: skillsSummaryEn,
    skills: skillsEn,
    libraries: librariesEn,
    software: softwareEn,
    education: educationEn,
    languages: languagesEn,
    experience: experienceEn,
  });

  useEffect(() => {
    handleUpdateData(i18n.language);
  }, []);

  const handleUpdateData: handleUpdateDataFunc = (lang) => {
    let dataClone: mainProps = deepClone(data);
    if (lang === EN) {
      dataClone = deepClone({
        profile: profileEn,
        contact: contactEn,
        aboutMe: aboutMeEn,
        skillsSummary: skillsSummaryEn,
        skills: skillsEn,
        libraries: librariesEn,
        software: softwareEn,
        education: educationEn,
        languages: languagesEn,
        experience: experienceEn,
      });
    } else {
      dataClone = deepClone({
        profile: profileVi,
        contact: contactVi,
        aboutMe: aboutMeVi,
        skillsSummary: skillsSummaryVi,
        skills: skillsVi,
        libraries: librariesVi,
        software: softwareVi,
        education: educationVi,
        languages: languagesVi,
        experience: experienceVi,
      });
    }
    setData(dataClone);
  };

  const handleOnChangeLanguage: handleOnChangeLanguageFunc = (lang) => {
    i18n.changeLanguage(lang);
    handleUpdateData(lang);
    saveDataToLocalStorage("lang", lang);
  };

  document.onreadystatechange = () => {
    () => {};
  };

  const {
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
  } = data;

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
        onChangeLanguage={handleOnChangeLanguage}
      />
    </ConfigProvider>
  );
};

export default Home;
