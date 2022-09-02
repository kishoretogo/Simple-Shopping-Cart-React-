import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import CartItem from "./cartItem";
import { useState } from "react";

function App() {
  const product = [
    {
      id: 1,
      name: "iphone",
      price: 2000,
    },
    {
      id: 2,
      name: "ephone",
      price: 2500,
    },
    {
      id: 3,
      name: "fphone",
      price: 3000,
    },
    {
      id: 4,
      name: "gphone",
      price: 20000,
    },
    {
      id: 5,
      name: "mphone",
      price: 200,
    },
  ];
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  
  let addtokart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  let removekart = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  };

  return ( 
    <div className="Container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {product.map((item) => {
              return (
                <Card item={item} cartItem={cart} addtokart={addtokart}></Card>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4">
          {cart.length === 0 ? (
            <div> no items in kart</div>
          ) : (
            <div className="row">
              <ol class="list-group list-group-numbered">
                {cart.map((cartItem) => {
                  return (
                    <CartItem
                      cartItem={cartItem}
                      removekart={removekart}
                    ></CartItem>
                  );
                })}
              </ol>
              <h1>Total = {total}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;


