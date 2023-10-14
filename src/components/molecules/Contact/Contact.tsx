import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail, TfiWorld, TfiLinkedin } from "react-icons/tfi";

import TitleContent from "@/components/atoms/TitleContent";
import { SIZE_ICON_DEFAULT } from "@/utils/constant";
import { contactProps } from "@/interfaces";

import ContactStyled from "./ContactStyled";

function Contact(props: contactProps) {
  const {
    phone = "",
    email = "",
    website = "",
    title = "",
    linkedIn = "",
  } = props;
  return (
    <ContactStyled>
      <div className="tw-mb-4">
        <TitleContent title={title} />
      </div>
      <div className="tw-mt-4 tw-grid grid-view-col tw-gap-3 tw-items-center">
        <TfiEmail size={SIZE_ICON_DEFAULT} />
        <span>{email}</span>
        <BsTelephone size={SIZE_ICON_DEFAULT} />
        <span>{phone}</span>
        <TfiWorld size={SIZE_ICON_DEFAULT} />
        <span>{website}</span>
        <TfiLinkedin size={SIZE_ICON_DEFAULT} />
        <span>{linkedIn}</span>
      </div>
    </ContactStyled>
  );
}

export default Contact;
