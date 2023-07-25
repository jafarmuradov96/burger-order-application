import Burgers from './layout/Burgers';
import Header from './layout/Header';
import { useState } from 'react';

function App() {
  const [countOrder, setCountOrder] = useState(0)
  const [orderList, setOrderList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  

  const handleAdd = (name, price, count, id) => {
    const found = orderList.find((item) => item.id === id)
    if (found) {
      const updatedOrderList = orderList.map(el => {
        if (el.id === id) {
          el.count++
        }
        return el
      })
      setOrderList(updatedOrderList)
    } else {
      setOrderList([...orderList, { name: name, price: price, count: count, id: id }]);
    }
    setTotalAmount(totalAmount + count * price);

    setCountOrder(countOrder + (+count))

  }


  const handleAddOrderCount = (id,count, price) => {
    setOrderList((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: +item.count + 1 } : item
      ));
      setCountOrder(countOrder + 1)
      setTotalAmount(totalAmount +  price);
  };

  const handleRemoveOrderCount = (id, targetIndex, count,price) => {
    setOrderList((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: +item.count - (item.count > 0 ? 1 : 0) } : item
      ))
    setTotalAmount(totalAmount -  price);

    if (count <= 1) {
      setOrderList(orderList.filter((_, index) => index !== targetIndex))
    }
    setCountOrder(countOrder - 1)

  };


  return (
    <>
      <Header
        orderList={orderList}
        countOrder={countOrder}
        totalAmount={totalAmount}
        onAdd={handleAddOrderCount}
        onRemove={handleRemoveOrderCount}
      />
      <main>
        <Burgers
          onSubmit={handleAdd} />
      </main>
    </>
  );
}

export default App;