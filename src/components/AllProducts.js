import React from "react";
import "./styles/AllProducts.css";
import productData from "./../data/productData.js";


const products = productData;

const AllProducts = ({ addProduct }) => {
  const display = () => {
    console.log(products);
  };

 // {
  //   id: "36bb1ef5-b3fe-4646-ab48-97716812831d",
  //   name: "Baseball Glove",
  //   price: 19.99,
  //   description:
  //     "This glove has a mark on it that's either a famous player's autograph or a ketchup stain.",
  //   img: "https://via.placeholder.com/200/0000FF/FFFFFF?text=Baseball+Glove",
  // },

  return (
    <div>
      <h1 className="build-header">Garage Sale</h1>
      <ul className="Products">
        {products.map((product) => (
          <li key={product.id} className="prodDivs">
            <h1> {product.name}</h1>
            <p>Price: ${product.price.toFixed(2)}
            </p>
            <img className="images" src={product.img} alt="image" />
            <p>{product.description}</p>
            <br />
            <button onClick={() => addProduct(product.name, product.price)}>
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
      <button onClick={display}>Show console log</button>
    </div>
  );
};

export default AllProducts;
