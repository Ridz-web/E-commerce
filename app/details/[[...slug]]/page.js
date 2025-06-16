import React from "react";

export default function DetailsPage({ params }) {
  const { slug } = params;
  return <div> {slug}</div>;
}
