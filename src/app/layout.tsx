import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "그런 GRun | 러닝 크루",
  description: "함께 뛰는 즐거움, 그런",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
