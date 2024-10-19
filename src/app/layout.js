import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const description =
  "Car Doctors is your trusted automotive repair workshop, providing expert car maintenance and repair services to keep your vehicle running smoothly. From diagnostics to engine repairs, we ensure quality care for every car.";
export const metadata = {
  title: {
    default: "Car Doctors",
    template: "%s || Car Doctors",
  },
  description: description,
  keywords: description.split(" "),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
