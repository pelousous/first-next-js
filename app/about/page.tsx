import React from "react";
import Heading from "../../components/Heading";

export const metadata: Metadata = {
  title: "About"
}

export default function AboutPage() {
  return (
    <>
      <Heading>About us</Heading>
      <p>Here we'll list all the reviews</p>
    </>
  );
}