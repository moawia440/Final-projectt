import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert('تم تسجيل الدخول بنجاح!');
      navigate('/');
    } else {
      alert('يرجى كتابة البريد وكلمة المرور');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2 bg-[#C1DCDC] rounded-r-lg p-8 flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80" 
          alt="Shopping Cart and Phone" 
          className="-max-h-[450px] object-contain"
        />
      </div>

      <div className="w-full md:w-1/3 space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-wide">Log in to Exclusive</h2>
          <p className="text-gray-500 text-sm mt-2">Enter your details below</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="text" 
            placeholder="Email or Phone Number" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-500 text-sm"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-500 text-sm"
          />

          <div className="flex items-center justify-between pt-4">
            <button 
              type="submit" 
              className="bg-red-500 text-white px-8 py-3 rounded text-sm font-medium hover:bg-red-600 transition-colors"
            >
              Log In
            </button>
            <a href="#" className="text-red-500 text-xs font-medium hover:underline">
              Forget Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}