import type { Metadata } from "next";
import '@fontsource/inter';
import "./globals.css";
import Header from './components/header';
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

export const metadata: Metadata = {
  title: "Open Proctor",
  description: "Online Proctoring Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body 
     >
    <CssVarsProvider disableTransitionOnChange>
    <CssBaseline />
  <Header/>
      {children}
      </CssVarsProvider>
      </body>
  </html>
  );
}
