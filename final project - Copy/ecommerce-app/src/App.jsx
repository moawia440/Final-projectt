import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductDetail from './pages/ProductDetail';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import AccountProfile from './pages/AccountProfile';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { products } from './data/products';

function HomePage({ onAddToCart, onToggleWishlist, wishlist }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-4 h-9 bg-red-500 rounded-sm"></span>
        <span className="text-red-500 font-bold text-sm">Today's</span>
      </div>
      <h2 className="text-3xl font-bold tracking-wide mb-8">Flash Sales</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            isWishlisted={wishlist.some(item => item.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([
    { ...products[2], quantity: 1 },
    { ...products[0], quantity: 2 }
  ]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State'
  });

  const handleAddToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + qty } : item);
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      return exists ? prev.filter(item => item.id !== product.id) : [...prev, product];
    });
  };

  const handleUpdateProfile = (updatedData) => {
    setUser(prev => ({ ...prev, ...updatedData }));
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <div>
        <Navbar 
          cartCount={totalCartCount} 
          wishlistCount={wishlist.length}
          user={user}
          onLogout={() => setUser(null)}
        />
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onAddToCart={handleAddToCart} 
                onToggleWishlist={handleToggleWishlist} 
                wishlist={wishlist} 
              />
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetail 
                onAddToCart={handleAddToCart} 
                onToggleWishlist={handleToggleWishlist} 
                wishlist={wishlist} 
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cart={cart} 
                onUpdateQuantity={handleUpdateQuantity} 
                onRemoveFromCart={handleRemoveFromCart} 
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <CheckOut 
                cart={cart} 
                onClearCart={handleClearCart} 
              />
            } 
          />
          <Route 
            path="/account" 
            element={
              <AccountProfile 
                user={user} 
                onUpdateProfile={handleUpdateProfile} 
              />
            } 
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp onLogin={(userData) => setUser(userData)} />} />
          <Route path="/login" element={<Login onLogin={(userData) => setUser(userData)} />} />
          
          {/* أي رابط غير متوقع يحول تلقائياً لصفحة 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}