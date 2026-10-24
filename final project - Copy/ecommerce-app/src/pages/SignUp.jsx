import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      alert('تم إنشاء الحساب بنجاح!');
      navigate('/login');
    } else {
      alert('برجاء ملء جميع البيانات');
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
          <h2 className="text-3xl font-bold tracking-wide">Create an account</h2>
          <p className="text-gray-500 text-sm mt-2">Enter your details below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-red-500 text-sm"
          />
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

          <button 
            type="submit" 
            className="w-full bg-red-500 text-white py-3 rounded text-sm font-medium hover:bg-red-600 transition-colors mt-4"
          >
            Create Account
          </button>
        </form>

        <button className="w-full border border-gray-300 py-3 rounded text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
          Sign up with Google
        </button>

        <div className="text-center text-sm text-gray-500 pt-2">
          Already have account?{' '}
          <Link to="/login" className="text-black font-semibold underline underline-offset-4 ml-2">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}