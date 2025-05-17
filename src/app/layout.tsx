import type { Metadata } from "next";
import { Inter } from 'next/font/google'

// Styles
import '@/styles/default.sass'

export const metadata: Metadata = {
  title: "Nicely Group",
  description: "Nicely Group Test App",
};
const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
