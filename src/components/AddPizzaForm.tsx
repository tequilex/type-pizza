import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const pizzasJpg = [
  "pizza-1.jpg",
  "pizza-2.jpg",
  "pizza-3.jpg",
  "pizza-4.jpg",
  "pizza-5.jpg",
  "pizza-6.jpg",
]

const initState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setNewPizza({
      ...newPizza,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const {title, price, img} = newPizza;

    if (title && price && img) {
      addPizza({
        id: Date.now(),
        title,
        price: Number(price),
        img
      });
      setNewPizza(initState)
    } else {
      alert('Заполните все поля')
    }
    
  };

console.log(newPizza);


  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={newPizza.price}
      />
      <select name="img" onChange={handleChange}>
        <option hidden >Выберите Изображение</option>
          {pizzasJpg.map(pizza => <option key={pizza} value={pizza}>{pizza}</option>)}        
      </select>
      <button type="submit">+ Добавить в меню</button>
    </form>
  );
};
export default AddPizzaForm;
