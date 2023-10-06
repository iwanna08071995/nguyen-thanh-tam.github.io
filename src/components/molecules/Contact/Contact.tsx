import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail, TfiWorld } from "react-icons/tfi";

import TitleContent from "@/components/atoms/TitleContent";
import { SIZE_ICON_DEFAULT } from "@/utils/constant";
import { ContactProps } from "@/interfaces";

import ContactStyled from "./ContactStyled";

function Contact(props: ContactProps) {
  const { phone = "", email = "", website = "", title = "" } = props;
  return (
    <ContactStyled>
      <div className="tw-mb-4">
        <TitleContent title={title} />
      </div>
      <div className="tw-mt-4 tw-grid grid-view-col tw-gap-3 tw-items-center tw-text-lg">
        <TfiEmail size={SIZE_ICON_DEFAULT} />
        <span>{email}</span>
        <BsTelephone size={SIZE_ICON_DEFAULT} />
        <span>{phone}</span>
        <TfiWorld size={SIZE_ICON_DEFAULT} />
        <span>{website}</span>
      </div>
    </ContactStyled>
  );
}

export default Contact;
