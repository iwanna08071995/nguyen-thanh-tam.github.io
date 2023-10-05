"use client";

import LayoutWithHeaderFooter from "@/components/templates/LayoutWithHeaderFooter";
import { LIST_LANGUAGE } from "@/utils/constant";
import { profile } from "@/db/data";

const Home = () => {
  return (
    <LayoutWithHeaderFooter listLanguage={LIST_LANGUAGE} profile={profile} />
  );
};

export default Home;
