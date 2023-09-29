import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

interface ButtonProps {
  children?: ReactNode;
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

export type {
  MainProps,
  LayoutWithHeaderFooter,
  ButtonProps,
  HeaderProps,
  SelectProps,
  ImageProps,
  LanguageSwitcherProps,
};
