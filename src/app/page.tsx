"use client";

import LayoutWithHeaderFooter from "@/components/templates/LayoutWithHeaderFooter";
import { LIST_LANGUAGE } from "@/utils/constant";
import { profile, contact, aboutMe, skillsSummary } from "@/db/data";

const Home = () => {
  return (
    <LayoutWithHeaderFooter
      listLanguage={LIST_LANGUAGE}
      profile={profile}
      contact={contact}
      aboutMe={aboutMe}
      skillsSummary={skillsSummary}
    />
  );
};

export default Home;
