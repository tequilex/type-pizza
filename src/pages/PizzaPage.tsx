import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pizza from '../models/Pizza'


const PizzaPage: FC = () => {
  const [pizza, setPizza] = useState<Pizza | null>(null)

  const { id } = useParams()

  useEffect(() => {
    const pizzasState = localStorage.getItem('pizzas')

    if (pizzasState && id) {
      const pizzas = JSON.parse(pizzasState)
      const pizza = pizzas.find((pizza: Pizza) => pizza.id === Number(id))
      setPizza(pizza)
  }}, [id])
  
  return (
    <>
    <span className='heading'>Ваша пицца</span>
    <div className="pizza pizza-page">
      <img src={`images/${pizza?.img}`} alt={pizza?.title} />
      <h2>{pizza?.title}</h2>
      <span>{pizza?.price} ₽</span>
      <p>Лучшая в городе!</p>
    </div>
    </>
  )
}
export default PizzaPage