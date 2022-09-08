import classes from "./Cards.module.css";
import CardsItem from "./CardsItem";

// cardsItems is an important prop
const CardsList = (props) => {
  console.log(props);

  // const removeCardHandler = (id) => {
  //   const userDoc = doc(db, "cardsItems", id);
  //   deleteDoc(userDoc);
  // };

  return (
    <ul className={classes.list}>
      {props.cardsItems.map((card) => (
        <CardsItem card={card} key={card.id} />
      ))}
    </ul>
  );
};

export default CardsList;
