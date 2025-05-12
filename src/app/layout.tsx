import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miguel Santos",
  description: "Portefolio for Miguel Santos, a Frontend Developer",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased container mx-auto px-4 xl:px-0`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
