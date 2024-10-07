import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2 items-baseline">
        <li className="font-raleway font-bold text-lg">
          <Link href="/" className="text-orange-800 hover:underline">Indie Gamer</Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews" className="text-orange-800 hover:underline">Reviews</Link>
        </li>
        <li>
          <Link href="/about" className="text-orange-800 hover:underline">About us</Link>
        </li>
      </ul>
    </nav>
  );
}