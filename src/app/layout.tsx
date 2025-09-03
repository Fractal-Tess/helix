import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/ReactClient";
import { Providers } from "./_components/ProvidersClient";

export const metadata: Metadata = {
  title: "Helix - Learning Platform",
  description: "Master programming languages through hands-on practice and interactive lessons",
  icons: [
    { rel: "icon", url: "/assets/logo/favicon.ico", sizes: "32x32" },
    {
      rel: "icon",
      url: "/assets/logo/logo-32.webp",
      sizes: "32x32",
      type: "image/webp",
    },
    {
      rel: "apple-touch-icon",
      url: "/assets/logo/logo-128.webp",
      sizes: "128x128",
    },
  ],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <html lang="en" className={`${geist.variable} dark`}>
        <body className="dark">{children}</body>
      </html>
    </Providers>
  );
}
