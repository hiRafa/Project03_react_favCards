import React, { useEffect, useState } from "react";
import CardsList from "../components/items/CardsList";

const AllCardsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCardsArray, setLoadedCardsArray] = useState([]);

  // React garantees that useState functions will remain the same, so no need to add as dependencies
  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://project04favoritecards-default-rtdb.asia-southeast1.firebasedatabase.app/cards.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cards = [];
        for (const key in data) {
          const eachCard = {
            id: key,
            ...data[key],
          };
          // console.log(eachCard.id);
          cards.push(eachCard);
        }

        setIsLoading(false);
        setLoadedCardsArray(cards);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p> Loading ... </p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Cards</h1>
      <CardsList cardsItems={loadedCardsArray} />
    </section>
  );
};

export default AllCardsPage;
