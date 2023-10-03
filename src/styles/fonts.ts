import { Inter } from "next/font/google";

// define your variable fonts
const display = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export { display };
