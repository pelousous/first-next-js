import Link from "next/link";
import React from "react";
import Heading from "../../components/Heading";

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <nav>
        <ul>
          <li>
            <Link href="/reviews/hollow-knight">Hollow knight</Link>
          </li>
          <li>
            <Link href="/reviews/stardew-valley">Stardew valley</Link>
          </li>
        </ul>
      </nav>
      <p>Here we'll list all the reviews</p>
    </>
  );
}
