import React from "react";
import { VscFilePdf } from "react-icons/vsc";

import Button from "@/components/atoms/Button";
import { buttonExportPDFProps } from "@/interfaces";

const ButtonExportPDF = (props: buttonExportPDFProps) => {
  const { size = "1.6rem" } = props;
  return (
    <div>
      <Button type="text">
        <VscFilePdf size={size} />
      </Button>
    </div>
  );
};

export default ButtonExportPDF;
