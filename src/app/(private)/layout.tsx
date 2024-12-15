import ModalManager from "@/components/Modals/ModalManager";

export default function PrivateLayout({
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
