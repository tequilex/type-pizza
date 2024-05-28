import React, { FC, useEffect, useState } from "react";
import AddPizzaForm from "../components/AddPizzaForm";
import PizzasList from "../components/PizzasList";

import Pizza from "../models/Pizza";

const HomePage: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  useEffect(() => {
    const pizzas = localStorage.getItem("pizzas");
    if (pizzas) {
      setPizzasList(JSON.parse(pizzas));
    }
  }, []);

  const addPizza = (newPizza: Pizza) => {
    const newPizzasList = [...pizzasList, newPizza];
    setPizzasList(newPizzasList);
    localStorage.setItem("pizzas", JSON.stringify(newPizzasList));
  };

  const updatePizza = (newPizza: Pizza) => {
    const newPizzasList = pizzasList.map((pizza) =>
      pizza.id === newPizza.id ? newPizza : pizza
    );
    setPizzasList(newPizzasList);
    localStorage.setItem("pizzas", JSON.stringify(newPizzasList));
  };

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
    setPizzasList(newPizzasList);
    localStorage.setItem("pizzas", JSON.stringify(newPizzasList));
  };

  console.log(pizzasList);

  return (
    <>
      <span className="heading">Пиццерия</span>
      <AddPizzaForm addPizza={addPizza} />
      <PizzasList
        pizzasList={pizzasList}
        deletePizza={deletePizza}
        updatePizza={updatePizza}
      />
    </>
  );
};

export default HomePage;
