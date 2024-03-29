import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/auth/Authprovider";
import { Toaster } from "react-hot-toast";
import TanstackProviders from "@/providers/TanstackProviders";
import "react-tabs/style/react-tabs.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ScheduleMeet",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light">
      <body className={`bg-[#0d0c22] ${inter.className} text-white`}>
        <link
          rel="icon"
          href="https://i.ibb.co/5LFVvdk/logo-white.webp"
          sizes="any"
        />

        <TanstackProviders>
          <AuthProvider>{children}</AuthProvider>
        </TanstackProviders>

        <Toaster />
      </body>
    </html>
  );
}
