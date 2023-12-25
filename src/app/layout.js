import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./cartcontext.js";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Script from "next/script";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


  <Head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/x-icon"
      href="/images/pizzona.png"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>;


export const metadata = {
  title: "Pizza-Orderng-App",
  description: "A food app to order for Pizza of different sizes and flavors",
  imageUrl: "/images/pizza-logo_afsvzn.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </CartProvider>

        {/* <Script src="https://code.jquery.come/jquery 3.2.1.slim.min.js" /> */}
      </body>
    </html>
  );
}
