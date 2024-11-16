import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tredi",
  description: "I'll bring you closer to the latest trends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
