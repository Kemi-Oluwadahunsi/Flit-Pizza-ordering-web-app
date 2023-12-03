"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { ReduxProvider } from "./redux/features/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pizzon food project",
  description: "A food app to order for Pizza of different sizes and flavors",
  imageUrl: "/images/pizza-logo_afsvzn.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
