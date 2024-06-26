import React from "react";
import Card from "./Card";

function CardMap({ data, val }) {
  // Filter data based on val and map each filtered element to a Card component
  const filteredCards = data.filter((ele) => ele.content === val).map((ele) => (
    <Card key={ele.id} data={ele} />
  ));

  return <>{filteredCards}</>; // Render the list of filtered cards
}

export default CardMap;
