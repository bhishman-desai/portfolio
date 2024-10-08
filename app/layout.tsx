import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhishman Desai | Portfolio",
  description: "Bhishman Desai Software Developer with 2 years of experience.",
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_TOKEN
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className="!scroll-smooth">
      <head>
        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TJ8ZYFH1K9"
        ></Script>
        <Script id="google-analytics">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-TJ8ZYFH1K9');
              `}
        </Script>
      </head>
      <body
          className={`${inter.className} bg-gray-50 text-gray-950 relative pt-20 sm:pt-30 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
      <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <Footer/>

          <Toaster position="bottom-center"/>
          <ThemeSwitch/>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
      </html>
  );
}
