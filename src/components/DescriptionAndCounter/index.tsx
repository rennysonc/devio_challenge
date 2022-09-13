import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

export default function DescriptionAndCounter() {
  const { order, setOrder } = useContext(OrderContext)

  const handleCounter = () => {
    order.quantity == 1 ?
      "" : setOrder({ ...order, quantity: order.quantity - 1 })
  }

  return (
    <div className="m-3 flex flex-col items-center">
      <h3 className="my-1 font-extrabold">{order.product}</h3>
      <p className="text-xs">2x hambúguer 200g</p>
      <div className="my-3 flex items-center justify-between w-20 border-2 border-solid border-primary rounded-3xl">
        <button className="bg-primary bg-icon-minus bg-cover w-5 h-5 rounded-full"
          onClick={() => handleCounter()}
        />
        <span className="px-2 text-xs">{order.quantity}</span>
        <button className="bg-primary bg-icon-plus bg-cover  w-5 h-5 rounded-full"
          onClick={() => setOrder({ ...order, quantity: order.quantity + 1 })}
        />
      </div>
    </div>
  )
}
