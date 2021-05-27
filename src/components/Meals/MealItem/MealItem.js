import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

export default function MealItem(props) {
  const context = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  // this function is actually invoked by MealItemForm which is its child component
  const addToCartHandler = (amount) => {
    console.log(props.name);
    console.log(amount);

    context.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
