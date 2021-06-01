import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import appSetting from "../../appSetting";

// const DUMMY_MEALS = [
// {
//   id: "m1",
//   name: "Sushi",
//   description: "Finest fish and veggies",
//   price: 22.99,
// },
// {
//   id: "m2",
//   name: "Schnitzel",
//   description: "A german specialty!",
//   price: 16.5,
// },
// {
//   id: "m3",
//   name: "Barbecue Burger",
//   description: "American, raw, meaty",
//   price: 12.99,
// },
// {
//   id: "m4",
//   name: "Green Bowl",
//   description: "Healthy...and green...",
//   price: 18.99,
// },
// ];

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(appSetting.firebaseUrl);

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      console.log(loadedMeals);

      setMeals(loadedMeals);
    };

    fetchMeals();
    // we only run the fetchMeals function when page load first time
    // so, we do not need to pass any dependencies
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
