import './App.css';
import Burgers from './layout/Burgers';
import Header from './layout/Header';
import { useState } from 'react';

function App() {
  const [countOrder, setCountOrder] = useState(0)
  const [orderList, setOrderList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  




  const handleAdd = (name, price, count,id) => {
    const found = orderList.find((item) => item.id === id)
    if (found) {
      const updatedOrderList = orderList.map(el => {
        if (el.id === id) {
          el.count ++
        }
        return el
      })
      setOrderList(updatedOrderList)
    } else {
      setOrderList([...orderList, { name: name, price: price, count: count, id: id }]);
    }

    setTotalAmount(totalAmount + count * price);
  }

  const handleAddCount = () => {
    setCountOrder(count => count + 1)
  } 


  const handleAddOrderCount = (id) => {
    // const updatedOrderList = orderList.map(el => {
    //   if (el.id === id) {
    //      return { ...el, count: +el.count + 1 }
    //   }
    //   console.log(el.count +1, 'b');
    //   return { ...el, count: +el.count + 1 }
    // })
    // setOrderList(updatedOrderList)
  }



  const handleRemoveOrderCount = (id) => {

    // const updatedOrderList = orderList.map(el => {
    //   if (el.id === id) {
    //     //  return 
    //   }
    //   console.log(el.count +1, 'b');
    //   return { ...el, count: +el.count - 1 }
    // })
    // setOrderList(updatedOrderList)
  }



  return (
    <>

      <Header
        orderList={orderList}
        countOrder={countOrder}
        totalAmount={totalAmount} 
        onAdd = {handleAddOrderCount}
        onRemove = {handleRemoveOrderCount}
        />
      <main>
        <Burgers
          handleAddCount={handleAddCount}
          onSubmit={handleAdd} />

      </main>

    </>
  );
}

export default App;
