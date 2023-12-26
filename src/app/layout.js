import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./cartcontext.js";
import Navbar from "./navbar/page";
import Footer from "./footer/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Pizza-Ordering-App: A food app to order for Pizza of different sizes and flavors"
};

export default function RootLayout({ children }) {

  


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/pizzona.png" />
      </head>
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
