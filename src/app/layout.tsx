import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.scss";
import WithProviders from "@/components/hoc/WithProviders";
import Footer from "@/components/ui/Footer/Footer";

import { NO_INDEX_PAGE, SITE_NAME } from "@/constants/seo.constants";
import Header from "@/components/ui/Header/HeaderComponent/Header";
import ToasterNotify from "@/components/common/ToasterNotify/ToasterNotify";

const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  ...NO_INDEX_PAGE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <WithProviders>
          <div className="app">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>

          <ToasterNotify />
        </WithProviders>
      </body>
    </html>
  );
}
