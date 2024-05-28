import { FC } from "react"
import Pizza from "../models/Pizza";
import PizzaCard from "./Pizza-card";

interface PizzasListProps {
  pizzasList: Pizza[],
  updatePizza: (newPizza: Pizza) => void
  deletePizza: (id: number) => void
}

const PizzasList: FC<PizzasListProps> = ({pizzasList, updatePizza, deletePizza}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return <PizzaCard updatePizza={updatePizza} deletePizza={deletePizza} key={pizza.id} pizza={pizza}/>
      })}
    </div>
  )
}

export default PizzasList