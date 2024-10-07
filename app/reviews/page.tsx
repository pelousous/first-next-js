import Link from "next/link";
import React from "react";
import Heading from "@/components/Heading";
import { getReview, getReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "All the reviews"
}

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <nav>
        <ul className="flex flex-col gap-4">
          {reviews && reviews.map((review, index) => (
            <li className="bg-white border rounded pb-1 shadow hover:shadow-xl">
              <Link
                className="font-raleway font-semibold" href={`/reviews/${review.slug}`}>
                <img src={review.image} alt="" width="640" height="360" className="mb-2 rounded-t" />
                <h2 className="text-center">{review.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </nav >
    </>
  );
}
