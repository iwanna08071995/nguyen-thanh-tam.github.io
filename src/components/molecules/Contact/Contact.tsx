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
      <TitleContent title={title} />
      <div className="tw-mt-4 sm:tw-grid grid-view-col tw-flex tw-flex-col tw-gap-3 tw-items-center">
        <TfiEmail className="sm:tw-flex tw-hidden" size={SIZE_ICON_DEFAULT} />
        <span className="tw-text-base sm:tw-text-lg">{email}</span>
        <BsTelephone
          className="sm:tw-flex tw-hidden"
          size={SIZE_ICON_DEFAULT}
        />
        <span className="tw-text-base sm:tw-text-lg">{phone}</span>
        <TfiWorld className="sm:tw-flex tw-hidden" size={SIZE_ICON_DEFAULT} />
        <span className="tw-text-base sm:tw-text-lg">{website}</span>
        <TfiLinkedin
          className="sm:tw-flex tw-hidden"
          size={SIZE_ICON_DEFAULT}
        />
        <span className="tw-text-base sm:tw-text-lg">{linkedIn}</span>
      </div>
    </ContactStyled>
  );
}

export default Contact;
