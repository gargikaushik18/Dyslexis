const Header = ({ cart, onCartClick }) => {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <h1>🛍️ Shopping Store</h1>

      <div className="cart-icon" onClick={onCartClick}>
        🛒 Cart
        <span className="cart-count">{count}</span>
      </div>
    </header>
  );
};

export default Header;
