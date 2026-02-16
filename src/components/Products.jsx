import React, { useState } from "react";
import "../styles/Products.css";

import learningCards from "../assets/product1.png";
import readingGame from "../assets/product2.png";
import therapyWorkbook from "../assets/product3.png";
import audioStories from "../assets/product4.png";

const PRODUCTS = [
  {
    id: 1,
    name: "28 Pieces Dyslexia Tools",
    description: "Dyslexia Reading Strips for Dyslexic Students",
    price: 19.99,
    image: learningCards,
  },
  {
    id: 2,
    name: "Interactive Games",
    description: "Fun Games And Activities For Dyslexic Children",
    price: 29.99,
    image: readingGame,
  },
  {
    id: 3,
    name: "Therapy Workbook",
    description: "Guided therapy exercises",
    price: 24.99,
    image: therapyWorkbook,
  },
  {
    id: 4,
    name: "Audio Stories",
    description: "Stories with narration",
    price: 14.99,
    image: audioStories,
  },
];

function Products() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    setNotification(true);
    setCart([]);
    setShowCart(false);

    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  return (
    <div className="products-page"

//       style={{

//         backgroundImage:

//           "url('https://img.freepik.com/premium-photo/navy-blue-background-images-background-copy-space_1179130-728432.jpg')",

//         backgroundRepeat: "no-repeat",

//         backgroundSize: "cover",

//         backgroundPosition: "center",

//       }}

    >
      <div className="products-header">
        <h1>Our Products</h1>
        <button className="cart-btn" onClick={() => setShowCart(true)}>
          🛒 Cart ({cart.length})
        </button>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-box">
            <h2>Your Cart</h2>

            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-img"
                    />

                    <div className="cart-details">
                      <strong>{item.name}</strong>
                      <p>
                        ${item.price} x {item.qty}
                      </p>

                      <div className="qty-controls">
                        <button onClick={() => decreaseQty(item.id)}>
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button onClick={() => increaseQty(item.id)}>
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="cart-footer">
                  <h3>Total: ${total.toFixed(2)}</h3>
                  <button
                    className="checkout-btn"
                    onClick={placeOrder}
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}

            <button
              className="close-btn"
              onClick={() => setShowCart(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {notification && (
        <div className="notification">
          ✅ Order Placed Successfully!
        </div>
      )}
    </div>
  );
}

export default Products;
