import "@/styles/globals.css";
import StyledComponentsRegistry from "../lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile - Frontend Developer - Nguyễn Thành Tâm</title>
        <meta
          name="description"
          content="Nguyễn Thành Tâm - Frontend Developer with skills in HTML, CSS, JavaScript, and React. View CV for more information on work experience and projects."
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
