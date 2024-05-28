import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface EditPizzaFormProps {
  data: Pizza
  handleToggleEdit: () => void
  updatePizza: (newPizza: Pizza) => void
}

const pizzasJpg = [
  "pizza-1.jpg",
  "pizza-2.jpg",
  "pizza-3.jpg",
  "pizza-4.jpg",
  "pizza-5.jpg",
  "pizza-6.jpg",
]

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, handleToggleEdit, updatePizza }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setEditPizza({
      ...editPizza,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const {title, price, img} = editPizza;

    if (title && price && img) {
      console.log(editPizza);
      updatePizza(editPizza)
      handleToggleEdit()
      
    } else {
      alert('Заполните все поля')
    }
    
  };


  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={editPizza.price}
      />
      <select name="img" onChange={handleChange}>
        <option hidden >Выберите Изображение</option>
          {pizzasJpg.map(pizza => <option key={pizza} value={pizza}>{pizza}</option>)}        
      </select>
      <button type="submit">Подтвердить</button>
    </form>
  );
};
export default EditPizzaForm;
