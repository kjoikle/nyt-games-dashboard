import type { Metadata } from "next";
import "./globals.css";
import ModalManager from "@/components/Modals/ModalManager";

export const metadata: Metadata = {
  title: "NYT Games Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased bg-stone-300`}>
        <ModalManager>{children}</ModalManager>
      </body>
    </html>
  );
}
