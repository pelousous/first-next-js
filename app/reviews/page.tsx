import Link from "next/link";
import React from "react";
import Heading from "@/components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <nav>
        <ul className="flex flex-col gap-4">
          <li className="bg-white border rounded pb-1 shadow hover:shadow-xl">
            <Link href="/reviews/hollow-knight">
              <img src="/images/hollow-knight.jpg" alt="" width="640" height="360" className="mb-2 rounded-t" />
              <h2 className="text-center">Hollow knight</h2>
            </Link>
          </li>
          <li className="bg-white border rounded pb-1 shadow hover:shadow-xl">
            <Link href="/reviews/stardew-valley">
              <img src="/images/stardew-valley.jpg" alt="" width="640" height="360" className="mb-2 rounded-t" />
              <h2 className="text-center">Stardew Valley</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
