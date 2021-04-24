import React from "react";
import AllProducts from "./AllProducts";
import "./styles/Cart.css";
import Total from "./Total.js";
import CheckOutForm from "./CheckOutForm.js"

let count = 0;


class Cart extends React.Component {
  state = { cart: [] };

  addProduct = (name, price) => {
    const newProduct = {
      prodCount: count++,
      prodName: name,
      price: price,
      prodTotal: 0,
    };
    this.setState((prevState) => ({ cart: [newProduct, ...prevState.cart] }));
    console.log(this.state);
  };

  render() {
    let sumOf = 0
 

    const { cart } = this.state;
    return (
      <div className="Cart">
        <AllProducts addProduct={this.addProduct} />
        <section className="rightCart">
          <h1>Cart</h1>
          <ul className="Shopping">
            {cart.map((product) => (
              <li key={product.id} total={(sumOf += product.price)}>
                {" "}
                {product.prodName}: ${product.price}
              </li>
            ))}
          </ul>
          <br />
          <div>
          <Total total={sumOf}  tax={sumOf * .05} />

   

          </div>
          <CheckOutForm total={sumOf}  tax={sumOf * .05}/>
   
          </section> 

  

      

      </div>
    );
  }
}
export default Cart;
