import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, createTheme, mantineHtmlProps, MantineProvider } from "@mantine/core";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Market Fresh",
  description: "Your site for finding Farmers Markets and Vendors",
};

const theme = createTheme({
  components: {
    Button:{
      defaultProps: {
        className: 'flex justify-center items-center w-50 h-15 bg-blue-500 text-white border-2'
      }
    }
  }
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
