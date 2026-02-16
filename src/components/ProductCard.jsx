const ProductCard = ({ product, cart, addToCart }) => {
  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <div className="product-image">{product.emoji}</div>

      <div className="product-info">
        <div className="product-title">{product.name}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">${product.price}</div>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          {inCart ? `In Cart (${inCart.quantity})` : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
