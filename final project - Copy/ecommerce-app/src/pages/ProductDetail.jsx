import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Heart, ShoppingCart, Star, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetail({ onAddToCart, onToggleWishlist, wishlist }) {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0];
  const [quantity, setQuantity] = useState(1);

  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb Navigation */}
      <div className="text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:underline">Home</Link> / <span>Product</span> / <span className="text-black font-semibold">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Product Image Display */}
        <div className="bg-gray-100 p-8 rounded-lg flex justify-center items-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="-max-h-[450px] w-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side: Specifications & Actions */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-gray-500">({product.reviews} Reviews)</span>
            <span className="text-gray-300">|</span>
            <span className={product.inStock ? "text-green-500 font-medium" : "text-red-500"}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="text-2xl font-bold text-red-500">
            ${product.price}.00 
            {product.oldPrice && <span className="text-gray-400 line-through text-lg ml-3">${product.oldPrice}.00</span>}
          </div>

          <p className="text-gray-600 text-sm border-b border-gray-200 pb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity and Actions */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 font-bold"
              >
                -
              </button>
              <span className="px-4 py-2 font-semibold text-sm">{quantity}</span>
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-2 bg-red-500 text-white hover:bg-red-600 font-bold"
              >
                +
              </button>
            </div>

            <button 
              onClick={() => onAddToCart(product, quantity)}
              className="bg-red-500 text-white px-8 py-2.5 rounded font-medium text-sm hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              <ShoppingCart size={18} /> Buy Now
            </button>

            <button 
              onClick={() => onToggleWishlist(product)}
              className={`p-2.5 border rounded transition-colors ${
                isWishlisted ? 'bg-red-50 border-red-500 text-red-500' : 'border-gray-300 hover:border-red-500'
              }`}
            >
              <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>

          

          {/* Shipping Features */}
          <div className="border border-gray-300 rounded-lg divide-y divide-gray-300 mt-6">
            <div className="p-4 flex items-center gap-4">
              <Truck size={28} className="text-red-500" />
              <div>
                <h4 className="font-semibold text-sm">Free Delivery</h4>
                <p className="text-xs text-gray-500">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="p-4 flex items-center gap-4">
              <RotateCcw size={28} className="text-red-500" />
              <div>
                <h4 className="font-semibold text-sm">Return Delivery</h4>
                <p className="text-xs text-gray-500">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}