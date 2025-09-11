import React, { useState } from 'react';
import './Shop.css';

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: "Organic Garden Booster",
      category: "organic",
      price: 24.99,
      image: "🌱",
      description: "Premium organic fertilizer for all garden plants",
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: "Rose Bloom Enhancer",
      category: "flower",
      price: 18.50,
      image: "🌹",
      description: "Specialized fertilizer for beautiful rose blooms",
      rating: 4.9,
      inStock: true
    },
    {
      id: 3,
      name: "Vegetable Growth Formula",
      category: "vegetable",
      price: 22.99,
      image: "🥕",
      description: "Perfect nutrition for healthy vegetables",
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: "Lawn Green Master",
      category: "lawn",
      price: 29.99,
      image: "🌿",
      description: "Keep your lawn green and lush all season",
      rating: 4.6,
      inStock: false
    },
    {
      id: 5,
      name: "Indoor Plant Nutrition",
      category: "indoor",
      price: 15.99,
      image: "🪴",
      description: "Gentle fertilizer for houseplants",
      rating: 4.8,
      inStock: true
    },
    {
      id: 6,
      name: "Flower Power Mix",
      category: "flower",
      price: 26.50,
      image: "🌺",
      description: "Vibrant blooms guaranteed",
      rating: 4.9,
      inStock: true
    },
    {
      id: 7,
      name: "Tree & Shrub Food",
      category: "tree",
      price: 34.99,
      image: "🌳",
      description: "Long-lasting nutrition for trees and shrubs",
      rating: 4.5,
      inStock: true
    },
    {
      id: 8,
      name: "Herb Garden Special",
      category: "herb",
      price: 19.99,
      image: "🌿",
      description: "Perfect for culinary herbs",
      rating: 4.7,
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🌱' },
    { id: 'organic', name: 'Organic', icon: '🌱' },
    { id: 'flower', name: 'Flowers', icon: '🌸' },
    { id: 'vegetable', name: 'Vegetables', icon: '🥕' },
    { id: 'lawn', name: 'Lawn Care', icon: '🌿' },
    { id: 'indoor', name: 'Indoor Plants', icon: '🪴' },
    { id: 'tree', name: 'Trees & Shrubs', icon: '🌳' },
    { id: 'herb', name: 'Herbs', icon: '🌿' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(category => (
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