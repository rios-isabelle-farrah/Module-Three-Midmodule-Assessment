import React from "react";
import "./styles/CheckOutForm.css";

class CheckOutForm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
    finalPurchase: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let arrayInputs = Object.values(this.state);
    console.log(this.props);
  
      let total = this.props.total.toFixed(2);
      let tax = this.props.tax.toFixed(2);
      let finalTotal = (Number(tax) + Number(total)).toFixed(2);

    if (arrayInputs.includes("")) {
      return window.alert(`Input is not valid`);
    }

    if (e.target.creditCard.value.length !== 16) {
      window.alert(`Credit card number is not valid`);
    }
    if (e.target.zipCode.value.length !== 5) {
      window.alert(`Zip code is not valid`);
    }

    window.alert(`Purchase complete, you will be charged: `+ `$`+finalTotal);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // - I can see a `Checkout` section that has
  // inputs _and labels_ for `First Name`, `Last Name`, `Email`, `Credit Card`,
  // `Zip Code`, and a button that says `Buy Now`
  // - Don't forget to create `<label>`

  render() {
    return (
      <section className="CheckOut">
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name
            <br />
            <input
              type="text"
              name="name"
              value={this.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Last Name
            <br />
            <input
              type="text"
              name="lastName"
              value={this.lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Email <br />
            <input
              name="email"
              value={this.email}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Credit Card
            <br />
            <input
              type="tel"
              name="creditCard"
              value={this.creditCard}
              onChange={this.handleInputChange}
            />
          </label>{" "}
          <br />
          <label>
            Zip Code <br />
            <input
              name="zipCode"
              for="zipCode"
              value={this.zipCode}
              onChange={this.handleInputChange}
            />
          </label>{" "}
          <br />
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}
export default CheckOutForm;
