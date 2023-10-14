import { ReactNode } from "react";

interface buttonProps {
  children?: ReactNode;
  type?: "link" | "dashed" | "primary" | "text";
}

interface selectProps {
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

interface languageSwitcherProps extends Omit<selectProps, "options"> {
  options: string[];
}

interface headerProps extends Omit<languageSwitcherProps, "options"> {
  listLanguage: string[];
}

interface layoutWithHeaderFooter extends mainProps, headerProps {}

interface imageProps {
  size?: string | number;
}

interface switchDarkModeProps {
  size?: string | number;
  mode?: number;
}

interface buttonExportPDFProps {
  size?: string | number;
}

interface dividerProps {
  className?: string;
  width?: string | number;
  position?: "start" | "end" | "center";
}

interface avatarProps {
  size?: "large" | "small" | "default" | number;
  src?: string | null;
}

interface layoutWrapperContentProps {
  ContentLeft?: ReactNode | null;
  ContentRight?: ReactNode | null;
  leftPosition?: string | null;
}

interface infoProps {
  name: string | undefined;
  job: string | undefined;
  location: string | undefined;
}

interface titleContentProps {
  title: string | undefined;
}

interface contactProps extends titleContentProps {
  phone: string | undefined;
  email: string | undefined;
  website: string | undefined;
}

interface mainProps {
  profile: {
    avatar: avatarProps;
    name?: string;
    location?: string;
    job?: string;
  };
  contact: contactProps;
  aboutMe: aboutMeprops;
  skillsSummary: skillsSummaryProps;
  skills: skillsListProps;
  libraries: skillsListProps;
  software: skillsListProps;
  education: timeLine;
}

interface aboutMeprops extends titleContentProps {
  content: string | undefined;
}

interface skillsSummaryProps extends titleContentProps {
  content: string[] | [];
}
interface ListsProps {
  content: string[] | [];
}

interface checkArrayNotEmptyFunc {
  (params: any[] | undefined | string[] | []): boolean;
}

interface skillsListProps extends skillsSummaryProps {}

interface timeListItem {
  position: string;
  time: string;
  name: string;
}

interface timeLine extends titleContentProps {
  timeList: timeListItem[];
}

interface showItemTimeLineFunc {
  (params: timeListItem): ReactNode;
}

interface languagesProps {}

export type {
  layoutWithHeaderFooter,
  buttonProps,
  headerProps,
  selectProps,
  imageProps,
  languageSwitcherProps,
  switchDarkModeProps,
  buttonExportPDFProps,
  dividerProps,
  avatarProps,
  mainProps,
  layoutWrapperContentProps,
  infoProps,
  titleContentProps,
  contactProps,
  aboutMeprops,
  skillsSummaryProps,
  ListsProps,
  checkArrayNotEmptyFunc,
  skillsListProps,
  timeLine,
  showItemTimeLineFunc,
  languagesProps,
};
