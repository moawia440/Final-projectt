import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Star, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted }) {
  return (
    <div className="group relative border border-gray-100 rounded-lg p-4 hover:shadow-lg transition-all duration-300 bg-white">
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
          -{product.discount}%
        </span>
      )}

      {/* Quick Action Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
        <button 
          onClick={() => onToggleWishlist(product)}
          className={`p-1.5 rounded-full shadow transition-colors ${
            isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
        <Link 
          to={`/product/${product.id}`}
          className="p-1.5 bg-white text-gray-600 rounded-full shadow hover:bg-red-500 hover:text-white transition-colors"
        >
          <Eye size={16} />
        </Link>
      </div>

      {/* Product Image Link */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-gray-50 rounded mb-4 p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          className="h-44 w-full object-contain group-hover:scale-105 transition-transform duration-300" 
        />
      </Link>

      {/* Add To Cart Button */}
      <button 
        onClick={() => onAddToCart(product, 1)}
        className="w-full bg-black text-white py-2 rounded text-xs font-semibold hover:bg-red-500 transition-colors flex items-center justify-center gap-2 mb-3"
      >
        <ShoppingCart size={14} /> Add To Cart
      </button>

      {/* Product Details */}
      <Link to={`/product/${product.id}`} className="block">
        <h3 className="font-semibold text-sm truncate hover:text-red-500">{product.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-500 font-bold text-sm">${product.price}</span>
          {product.oldPrice && <span className="text-gray-400 line-through text-xs">${product.oldPrice}</span>}
        </div>
        <div className="flex items-center gap-1 mt-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
          ))}
          <span className="text-gray-400 text-[10px] ml-1">({product.reviews})</span>
        </div>
      </Link>
    </div>
  );
}