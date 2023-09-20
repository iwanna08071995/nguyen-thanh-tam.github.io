import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

interface LayoutWithHeaderFooter extends MainProps {}

export type { MainProps, LayoutWithHeaderFooter };
