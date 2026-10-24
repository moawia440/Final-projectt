import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, LogOut } from 'lucide-react';

export default function Navbar({ cartCount, wishlistCount, user, onLogout }) {
  return (
    <header className="w-full border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="bg-black text-white text-xs py-2 px-4 flex justify-between items-center text-center">
        <div className="flex-1 flex justify-center items-center gap-2">
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          <Link to="/" className="underline font-semibold hover:text-gray-300 ml-2">ShopNow</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide">Exclusive</Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavLink to="/" className={({isActive}) => isActive ? "text-red-500 border-b-2 border-red-500 pb-1" : "hover:text-red-500"}>Home</NavLink>
          <NavLink to="/signup" className={({isActive}) => isActive ? "text-red-500 border-b-2 border-red-500 pb-1" : "hover:text-red-500"}>Sign Up</NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative bg-gray-100 rounded px-3 py-2 flex items-center w-52">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="bg-transparent text-xs w-full focus:outline-none"
            />
            <Search size={16} className="text-gray-500" />
          </div>

          {/* Wishlist Button with Counter */}
          <div className="relative">
            <button className="p-1.5 hover:bg-gray-100 rounded-full">
              <Heart size={20} />
            </button>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </div>

         {/* Cart Button with Counter */}
<Link to="/cart" className="relative p-1.5 hover:bg-gray-100 rounded-full">
  <ShoppingCart size={20} />
  {cartCount > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
      {cartCount}
    </span>
  )}
</Link>

          {/* Logged in state */}
          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-gray-300">
              <span className="text-xs font-semibold text-gray-700">Hi, {user.name}</span>
              <button onClick={onLogout} title="Logout" className="p-1 hover:text-red-500">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="p-1.5 hover:bg-gray-100 rounded-full">
              <User size={20} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}