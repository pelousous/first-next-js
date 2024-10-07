import React from "react";
import Heading from "@/components/Heading";
import Link from "next/link";
import { getFeatured } from "@/lib/reviews";

export default async function HomePage() {
  const featuredReview = await getFeatured();
  //console.log(featuredReview);
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">
        Only the best indie games, reviews for you
      </p>
      <div className="bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full">
        <Link className="flex flex-col md:flex-row" href={`/reviews/${featuredReview.slug}`}>
          <img src={`/images/${featuredReview.slug}.jpg`} alt={featuredReview.title} width="640" height="360" className="rounded-t  sm:rounded-l sm:rounded-r-none" />
          <h2 className="font-raleway font-semibold text-center py-1 sm:px-2">{featuredReview.title}</h2>
        </Link>
      </div>
    </>
  );
}
