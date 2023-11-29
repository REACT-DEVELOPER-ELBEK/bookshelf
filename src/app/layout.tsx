import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/redux/provider/provider";
import Nav from "./layout/nav/Nav";

export const metadata: Metadata = {
  title: "BookShelf",
  description: "Bookshelf app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
