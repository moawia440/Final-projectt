import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CheckOut({ cart, onClearCart }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [saveInfo, setSaveInfo] = useState(true);

  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: ''
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.streetAddress || !formData.city || !formData.phoneNumber) {
      alert('يرجى ملء كافة الحقول الأساسية المطلوبة (*)');
      return;
    }

    alert('🎉 تم استلام طلبك بنجاح! شكراً لتسوقك معنا.');
    onClearCart();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-10">
        <Link to="/" className="hover:underline">Account</Link> / 
        <Link to="/cart" className="hover:underline mx-1">View Cart</Link> / 
        <span className="text-black font-semibold ml-1">CheckOut</span>
      </div>

      <h1 className="text-3xl font-bold tracking-wide mb-8">Billing Details</h1>

      <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-16 justify-between items-start">
        {/* Left Side: Form Inputs */}
        <div className="w-full lg:w-1/2 space-y-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">First Name*</label>
            <input 
              type="text" 
              name="firstName" 
              required 
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Company Name</label>
            <input 
              type="text" 
              name="companyName" 
              value={formData.companyName}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Street Address*</label>
            <input 
              type="text" 
              name="streetAddress" 
              required 
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Apartment, floor, etc. (optional)</label>
            <input 
              type="text" 
              name="apartment" 
              value={formData.apartment}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Town/City*</label>
            <input 
              type="text" 
              name="city" 
              required 
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Phone Number*</label>
            <input 
              type="tel" 
              name="phoneNumber" 
              required 
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Email Address*</label>
            <input 
              type="email" 
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <input 
              type="checkbox" 
              id="saveInfo"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className="accent-red-500 w-4 h-4 cursor-pointer"
            />
            <label htmlFor="saveInfo" className="text-xs text-gray-700 cursor-pointer">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* Right Side: Order Summary & Payment */}
        <div className="w-full lg:w-5/12 space-y-6">
          {/* Purchased Items List */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.title} className="w-10 h-10 object-contain" />
                  <span className="font-medium">{item.title}</span>
                  <span className="text-gray-400 text-xs">x{item.quantity}</span>
                </div>
                <span className="font-semibold">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {/* Pricing Totals */}
          <div className="border-t border-b border-gray-200 py-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-semibold">${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="text-gray-500">Free</span>
            </div>
            <div className="flex justify-between font-bold text-base pt-2 border-t border-gray-100">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-3">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setPaymentMethod('bank')}>
              <div className="flex items-center gap-3">
                <input 
                  type="radio" 
                  name="payment" 
                  checked={paymentMethod === 'bank'} 
                  onChange={() => setPaymentMethod('bank')}
                  className="accent-red-500 cursor-pointer"
                />
                <span className="text-sm font-medium">Bank</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-blue-600 bg-gray-100 px-1 rounded">VISA</span>
                <span className="text-xs font-bold text-red-600 bg-gray-100 px-1 rounded">MC</span>
              </div>
            </div>

            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPaymentMethod('cash')}>
              <input 
                type="radio" 
                name="payment" 
                checked={paymentMethod === 'cash'} 
                onChange={() => setPaymentMethod('cash')}
                className="accent-red-500 cursor-pointer"
              />
              <span className="text-sm font-medium">Cash on delivery</span>
            </div>
          </div>

          {/* Coupon Code Inline */}
          <div className="flex gap-4 pt-2">
            <input 
              type="text" 
              placeholder="Coupon Code" 
              className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none flex-1"
            />
            <button 
              type="button" 
              className="bg-red-500 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Apply Coupon
            </button>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-red-500 text-white py-3 rounded text-sm font-bold hover:bg-red-600 transition-colors"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}