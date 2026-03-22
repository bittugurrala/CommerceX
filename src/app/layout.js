import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CommerceX",
  description: "All in one shopping size for fashion",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full min-w-xs flex flex-col mx-auto sm:max-w-xl px-4 md:max-w-3xl md:px-4 md:py-2 lg:max-w-6xl">
        <div className=" ">
          <nav><Navigation/></nav>
          <main>{children}</main>
          <footer><Footer/></footer>
        </div>
        
      </body>
    </html>
  );
}
