import { display } from "@/styles/fonts";

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={display.style}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile - Frontend Developer - Nguyễn Thành Tâm</title>
        <meta
          name="description"
          content="Nguyễn Thành Tâm - Frontend Developer with skills in HTML, CSS, JavaScript, and React. View CV for more information on work experience and projects."
        />
      </head>
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
