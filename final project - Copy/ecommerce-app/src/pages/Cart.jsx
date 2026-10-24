import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export default function Cart({ cart, onUpdateQuantity, onRemoveFromCart }) {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = Math.max(0, subtotal - discount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'SAVE10') {
      setDiscount(subtotal * 0.1);
      alert('تم تطبيق خصم 10% بنجاح!');
    } else if (couponCode.trim()) {
      alert('كود الخصم غير صحيح! (جرب كود SAVE10)');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-10">
        <Link to="/" className="hover:underline">Home</Link> / <span className="text-black font-semibold">Cart</span>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <h2 className="text-2xl font-bold text-gray-700">سلتك فارغة حالياً</h2>
          <p className="text-gray-500 text-sm">قم بإضافة بعض المنتجات لتظهر هنا</p>
          <Link 
            to="/" 
            className="inline-block bg-red-500 text-white px-8 py-3 rounded text-sm font-medium hover:bg-red-600 transition-colors"
          >
            العودة للمتجر
          </Link>
        </div>
      ) : (
        <>
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-4 bg-white shadow-sm rounded border border-gray-100 p-4 mb-6 font-medium text-sm text-gray-700 text-center">
            <div className="text-left pl-4">Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Cart Items List */}
          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-1 md:grid-cols-4 items-center bg-white shadow-sm rounded border border-gray-100 p-4 gap-4 text-center"
              >
                {/* Product Info & Remove */}
                <div className="flex items-center gap-4 text-left">
                  <button 
                    onClick={() => onRemoveFromCart(item.id)}
                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    title="Remove item"
                  >
                    <X size={14} />
                  </button>
                  <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                  <span className="text-sm font-medium line-clamp-1">{item.title}</span>
                </div>

                {/* Price */}
                <div className="text-sm font-semibold">${item.price}</div>

                {/* Quantity Controls */}
                <div className="flex justify-center items-center">
                  <div className="flex items-center border border-gray-300 rounded px-2 py-1 gap-3">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="text-gray-500 hover:text-black font-bold text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold w-6 text-center">
                      {String(item.quantity).padStart(2, '0')}
                    </span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-black font-bold text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="text-sm font-bold text-red-500">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mb-12">
            <Link 
              to="/" 
              className="border border-gray-400 px-8 py-3 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Return To Shop
            </Link>
            <button 
              onClick={() => alert('تم تحديث السلة بنجاح')} 
              className="border border-gray-400 px-8 py-3 rounded text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Update Cart
            </button>
          </div>

          {/* Coupon and Totals Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-4 w-full lg:w-1/2">
              <input 
                type="text" 
                placeholder="Coupon Code" 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-red-500 flex-1 max-w-xs"
              />
              <button 
                type="submit" 
                className="bg-red-500 text-white px-8 py-3 rounded text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Apply Coupon
              </button>
            </form>

            {/* Cart Summary Card */}
            <div className="border-2 border-black rounded p-6 w-full lg:w-96 space-y-4">
              <h3 className="text-lg font-bold">Cart Total</h3>
              
              <div className="space-y-3 text-sm border-b border-gray-300 pb-3">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span className="font-semibold">-${discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-gray-500">Free</span>
                </div>
              </div>

              <div className="flex justify-between text-base font-bold pb-2">
                <span>Total:</span>
                <span>${total}</span>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-red-500 text-white py-3 rounded text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Proceeds to checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}