

import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./CartContext/page";
import Navbar from "./navbar/page";
import Footer from "./footer/page";



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
        <CartProvider>
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
