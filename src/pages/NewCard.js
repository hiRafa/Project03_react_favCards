import React from "react";
import { useHistory } from "react-router-dom";
import NewCardForm from "../components/items/NewCardForm";

const NewCardPage = (props) => {
  const history = useHistory();
  // Added /cards.json to the link
  function addCardHandler(cardData) {
    fetch(
      "https://project04favoritecards-default-rtdb.asia-southeast1.firebasedatabase.app/cards.json",
      {
        method: "POST",
        body: JSON.stringify(cardData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <NewCardForm onAddCard={addCardHandler} />
    </section>
  );
};

export default NewCardPage;
