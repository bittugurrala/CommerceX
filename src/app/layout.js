import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";
import { Suspense } from "react";
import { ToastContainer} from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "CommerceX",
  description: "All in one shopping size for fashion",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}>
      <body className= {`${poppins.className}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="mx-auto sm:max-w-xl px-4 md:max-w-3xl md:px-4 md:py-2 lg:max-w-6xl">
            <nav><Navigation/></nav>
            <main className="flex-1 container px-4">{children}</main>
            <footer><Footer/></footer>
            <ToastContainer position="bottom-right"/>
          </div>
        </Suspense>
        
        
      </body>
    </html>
  );
}
