import { useMemo, useState } from "react";
const App = () => {
  const PRODUCTS = [
    { id: 1, name: "ესპრესო", price: 4 },
    { id: 2, name: "კაპუჩინო", price: 7 },
    { id: 3, name: "ლატე", price: 8 },
    { id: 4, name: "ფლეთ ვაიტი", price: 9 },
    { id: 5, name: "მოკა", price: 10 },
  ];

  const [quantity, setQuantity] = useState([
    { id: 2, count: 10, name: PRODUCTS[1].name },
    { id: 3, count: 4, name: PRODUCTS[2].name },
  ]);
  const [total, setTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  function addItem(id) {
    let newQuantity = quantity.map((el) =>
      el.id === id ? { ...el, count: el.count + 1 } : el,
    );

    if (!quantity.find((el) => el.id === id)) {
      newQuantity.push({ id, count: 1, name: PRODUCTS[id - 1].name });
    }

    setQuantity(newQuantity);
  }

  function decreaseItem(id) {
    let newQuantity = quantity.map((el) =>
      el.id == id ? { ...el, count: el.count - 1 } : el,
    );

    newQuantity = newQuantity.filter((el) => el.count !== 0);

    setQuantity(newQuantity);
  }

  useMemo(() => {
    const sum = quantity.map((el) => el.count * PRODUCTS[el.id - 1].price);
    const red = sum.reduce((a, b) => a + b);
    const totalAmount = quantity.reduce((a, b) => a + b.count, 0);
    console.log(totalAmount);
    setTotal(red);
    setTotalAmount(totalAmount);
  }, [quantity]);

  return (
    <div className="flex flex-col justify-around">
      <div className="flex justify-around">
        {quantity.map((el) => (
          <div
            key={el.id}
            className="flex flex-col gap-2 w-[200px] p-2 border mt-2 border-gray-600 rounded-lg justify-between"
          >
            <h1>name: {el.name}</h1>
            <h2>count: {el.count}</h2>
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        {PRODUCTS.map((el) => (
          <div
            key={el.id}
            className="flex gap-2 w-[200px] p-2 border mt-2 border-gray-600 rounded-lg justify-between "
          >
            <h2>{el.name}</h2>
            <h2>{el.price}</h2>
            <button
              className="p-2 border border-gray-600 rounded-lg"
              onClick={() => addItem(el.id)}
            >
              +
            </button>
            <button
              className="p-2 border border-gray-600 rounded-lg"
              onClick={() => decreaseItem(el.id)}
            >
              -
            </button>
          </div>
        ))}

        <div className="flex gap-2">
          <h1>total Price: {total}</h1>
          <h1>total Amount: {totalAmount}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
