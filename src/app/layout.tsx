import type { Metadata } from "next";
import { Inter, Dela_Gothic_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dela = Dela_Gothic_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WIDER",
  description: "何かをもっと広げよう。 make something WIDER. WIDERは、若き自由な発想で見えない課題に挑むソリューションインテグレーター。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  );
}
