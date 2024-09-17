import React from "react";
import NavBar from '../components/NavBar'

import "./global.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head></head>
      <body className="flex flex-col px-4 py-2 min-h-screen bg-orange-50">
        <header>
          <NavBar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="text-center text-xs border-t">Game data and images courtesy of <a href="https://rawg.io/" className="text-orange-800 hover:underline">RAWG</a></footer>
      </body>
    </html>
  );
}
