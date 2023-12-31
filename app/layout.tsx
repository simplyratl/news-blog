import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/app/components/shared/navbar";
import { Providers } from "@/utils/providers";

const poppins = Poppins({
  weight: ["400", "100", "300", "500", "700", "600", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={poppins.className}>
          <div className="max-w-[1024px] mx-auto px-12">
            <Navbar />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
