import React from "react";
import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
  return getSlugs();
}

type Props = {
  params: any
}

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const review = await getReview(slug);

  console.log(review);

  return {
    title: review.title,
  }
}

export default async function ReviewPage({ params }) {
  const { title, date, image, body } = await getReview(params.slug);

  console.log("[ReviewPage] rendering", params.slug);

  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic pb-2">{date}</p>
      <img src={image} alt="" width="640" height="360" className="mb-2 rounded" />
      <article dangerouslySetInnerHTML={{ __html: body }} className="prose prose-slate" />
    </>
  );
}