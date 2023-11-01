import React, { useState } from "react";
import { VscFilePdf } from "react-icons/vsc";

import Button from "@/components/atoms/Button";
import { buttonExportPDFProps, handleOnExportToPDFFunc } from "@/interfaces";
import i18n from "../../../lib/i18n";

const ButtonExportPDF = (props: buttonExportPDFProps) => {
  const { size = "1.6rem" } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnExportToPDF: handleOnExportToPDFFunc = async () => {
    try {
      const fileURL = `/pdf/cv_${i18n.language}.pdf`;

      const fileName = `Profile_Frontend_Developer_Nguyen_Thanh_Tam_${i18n.language}.pdf`;
      setLoading(true);

      const response = await fetch(fileURL);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to download file");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button type="text" onClick={handleOnExportToPDF} loading={loading}>
        <VscFilePdf size={size} />
      </Button>
    </div>
  );
};

export default ButtonExportPDF;
