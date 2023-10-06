import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  type?: "link" | "dashed" | "primary" | "text";
}

interface SelectProps {
  options: Array<{
    key: number | string;
    value: string;
    label: string | ReactNode;
  }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
  suffixIcon?: ReactNode | null;
  className?: string;
}

interface LanguageSwitcherProps extends Omit<SelectProps, "options"> {
  options: string[];
}

interface HeaderProps extends Omit<LanguageSwitcherProps, "options"> {
  listLanguage: string[];
}

interface LayoutWithHeaderFooter extends MainProps, HeaderProps {}

interface ImageProps {
  size?: string | number;
}

interface SwitchDarkModeProps {
  size?: string | number;
  mode?: number;
}

interface ButtonExportPDFProps {
  size?: string | number;
}

interface DividerProps {
  className?: string;
  width?: string | number;
  position?: "start" | "end" | "center";
}

interface AvatarProps {
  size?: "large" | "small" | "default" | number;
  src?: string | null;
}

interface LayoutWrapperContentProps {
  ContentLeft?: ReactNode | null;
  ContentRight?: ReactNode | null;
}

interface InfoProps {
  name: string | undefined;
  job: string | undefined;
  location: string | undefined;
}

interface TitleContentProps {
  title: string | undefined;
}

interface ContactProps extends TitleContentProps {
  phone: string | undefined;
  email: string | undefined;
  website: string | undefined;
}

interface MainProps {
  profile: {
    avatar: AvatarProps;
    name?: string;
    location?: string;
    job?: string;
  };
  contact: ContactProps;
  aboutMe: AboutMeprops;
  skillsSummary: SkillsSummaryProps;
}

interface AboutMeprops extends TitleContentProps {
  content: string | undefined;
}

interface SkillsSummaryProps extends TitleContentProps {
  content: string[] | [];
}
interface ListsProps {
  content: string[] | [];
}

interface checkArrayNotEmptyFunc {
  (params: any[] | undefined | string[] | []): boolean;
}

export type {
  LayoutWithHeaderFooter,
  ButtonProps,
  HeaderProps,
  SelectProps,
  ImageProps,
  LanguageSwitcherProps,
  SwitchDarkModeProps,
  ButtonExportPDFProps,
  DividerProps,
  AvatarProps,
  MainProps,
  LayoutWrapperContentProps,
  InfoProps,
  TitleContentProps,
  ContactProps,
  AboutMeprops,
  SkillsSummaryProps,
  ListsProps,
  checkArrayNotEmptyFunc,
};
