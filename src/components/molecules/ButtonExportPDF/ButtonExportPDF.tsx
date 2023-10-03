import React from "react";
import { VscFilePdf } from "react-icons/vsc";

import Button from "@/components/atoms/Button";
import { ButtonExportPDFProps } from "@/interfaces";

const ButtonExportPDF = (props: ButtonExportPDFProps) => {
  const { size } = props;
  return (
    <div>
      <Button type="text">
        <VscFilePdf size={size} />
      </Button>
    </div>
  );
};

ButtonExportPDF.defaultProps = {
  size: "1.6rem",
};

export default ButtonExportPDF;
