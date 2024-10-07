import React from "react";
import NavBar from '../components/NavBar'
import { exo2, raleway } from "./fonts";

import "./global.css";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
}


// set the metadata for all the pages of the app
// we can add specifics metadata inside the single page
export const metadata: Metadata = {
  title: {
    template: '%s | Indie Gamer',
    default: 'Indie Gamer',
  },
  description: 'Only the best indie games, reviews for you'
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${exo2.variable} ${raleway.variable}`}>
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
