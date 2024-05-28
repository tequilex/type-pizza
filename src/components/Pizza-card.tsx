import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditPizzaForm from "./EditPizzaForm";
import Pizza from "../models/Pizza";

interface PizzaCardProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const PizzaCard: FC<PizzaCardProps> = ({ pizza, updatePizza, deletePizza }) => {
  const { title, price, img, id } = pizza;
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    deletePizza(id);
  };

  return (
    <div className="pizza">
      <img src={`/images/${img}`} alt={title} />
      <h2>
        <Link to={`/${id}`}>
          {title}
        </Link>
      </h2>
      <span>{price} ₽</span>
      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete onClick={handleDelete} />
      </div>

      {edit ? (
        <EditPizzaForm
          updatePizza={updatePizza}
          data={pizza}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  );
};
export default PizzaCard;
