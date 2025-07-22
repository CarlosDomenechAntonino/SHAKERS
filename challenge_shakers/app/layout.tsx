/**
 * @file layout.tsx
 * @description
 * -----------------------------------------------------
 * Archivo que contiene el layout principal de la aplicación
 * -----------------------------------------------------
 * @version 0.0.1a
 * @created unknown
 * @modified 2025-04-21
 * @author DLT Code
 * @author Nacho Moya
 * @copyright © DLT Code
 * @license Private
 * */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Shakers",
    template: "%s | Ceres",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
