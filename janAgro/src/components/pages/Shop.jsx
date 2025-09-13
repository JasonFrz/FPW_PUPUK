import React, { useState,useEffect } from 'react';
import axios from 'axios'
import './Shop.css';

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [produk, setProduk] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Produk');
        setProduk(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Category');
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

    

  const filteredProducts = produk
  .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
  .filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };


  
  return (
    <div className="shop-page">
      {/* Floating Plants */}
      <div className="shop-bg-plants">
        <div className="floating-plant">🌱</div>
        <div className="floating-plant">🌿</div>
        <div className="floating-plant">🍀</div>
        <div className="floating-plant">🌸</div>
      </div>

      {/* Header */}
      <div className="shop-header">
        <h1>🛒 GreenGrow Shop</h1>
        <p>Find the perfect fertilizer for your garden</p>
        <button 
          className="cart-toggle"
          onClick={() => setShowCart(!showCart)}
        >
          🛒 Cart ({getTotalItems()})
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="🔍 Search for fertilizers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {category.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Shopping Cart */}
      {showCart && (
        <div className="cart-overlay">
          <div className="cart-modal">
            <div className="cart-header">
              <h3>🛒 Shopping Cart</h3>
              <button onClick={() => setShowCart(false)}>✕</button>
            </div>
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="empty-cart">Your cart is empty 🌱</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <span className="cart-item-icon">{item.image}</span>
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p>${item.price}</p>
                    </div>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ${getTotalPrice()}</strong>
                </div>
                <button className="checkout-btn">
                  🌱 Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}





      {/* Products Grid */}
      <div className="products-grid">
        
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <span className="product-icon">{product.image}</span>
              {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                    ⭐
                  </span>
                ))}
                <span className="rating-text">({product.rating})</span>
              </div>
              <div className="product-price">${product.price}</div>
              <button 
                className={`add-to-cart ${!product.inStock ? 'disabled' : ''}`}
                onClick={() => addToCart(product)}
                disabled={!product.inStock}
              >
                {product.inStock ? '🌱 Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>






      {/* Featured Section */}
      <div className="featured-section">
        <h2>🌟 Featured This Month</h2>
        <div className="featured-banner">
          <div className="featured-content">
            <h3>Summer Garden Bundle 🌻</h3>
            <p>Get everything you need for a thriving summer garden!</p>
            <div className="bundle-items">
              <span>🌱 Organic Fertilizer</span>
              <span>🌸 Flower Booster</span>
              <span>🥕 Vegetable Food</span>
            </div>
            <div className="bundle-price">
              <span className="old-price">$75.99</span>
              <span className="new-price">$59.99</span>
            </div>
            <button className="bundle-btn">🛒 Get Bundle</button>
          </div>
          <div className="featured-plants">
            <span className="featured-plant">🌻</span>
            <span className="featured-plant">🌹</span>
            <span className="featured-plant">🌸</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;    