// import { Provider } from "@reduxjs/toolkit";
import { CartProvider } from "./cartcontext.js";
import { Inter } from "next/font/google";
import { ProductsProvider } from "../../ProductContext.jsx";
import "./globals.css";
// import store from "../app/redux/store.js"
import Navbar from "./navbar/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Pizza-Ordering-App: A food app to order for Pizza of different sizes and flavors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/pizzona.png" />
      </head>
      <body className={inter.className}>
        {/* <Provider> */}
          <ProductsProvider>
            <CartProvider>
              <Navbar />
              <div className="">{children}</div>
              <Footer />
            </CartProvider>
          </ProductsProvider>
        {/* </Provider> */}
      </body>
    </html>
  );
}
