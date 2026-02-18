import "./globals.css";
import React from "react";
import SideBar from "./layout/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-zinc-50 dark:bg-black">
        {/* Sidebar */}
        <SideBar />

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
