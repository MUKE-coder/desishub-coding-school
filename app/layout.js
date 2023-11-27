import "../styles/main.scss";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Desishub Coding School: Learn Programming Languages & Web Development",
  description:
    "Desishub Coding School is a leading institute offering programming courses in Next.js, MongoDB, Node.js, Laravel, Python, Django, and more. Our expert instructors provide comprehensive training to help you become a skilled programmer.",
  keywords:
    "Desishub Coding School, programming courses, web development, Next.js, MongoDB, Node.js, Laravel, Python, Django",
  favicon: "/favicon.ico", // Replace with the URL of your favicon image
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
