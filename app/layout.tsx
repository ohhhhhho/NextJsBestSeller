import type { Metadata } from "next";
import "@/app/styles/globals.css";
import Navigation from "@/components/navigation";
import {Arvo} from "next/font/google"

const arvo = Arvo({ subsets: ["latin"], weight: ["400"],variable:"--font-arvo" });

export const metadata: Metadata = {
  title: {
    template: "%s | Book",
    default: "Best sellers",
  },
  description: "The best sellers",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arvo.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
