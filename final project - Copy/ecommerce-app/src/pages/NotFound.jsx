import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 text-left mb-12">
        <Link to="/" className="hover:underline">Home</Link> / <span className="text-black font-semibold">404 Error</span>
      </div>

      {/* Main Error Message */}
      <div className="py-12 space-y-6">
        <h1 className="text-6xl md:text-8xl font-medium tracking-widest text-black">
          404 Not Found
        </h1>
        <p className="text-sm text-gray-600">
          Your visited page not found. You may go home page.
        </p>
        <div>
          <Link 
            to="/" 
            className="inline-block bg-red-500 text-white px-10 py-3.5 rounded text-sm font-medium hover:bg-red-600 transition-colors shadow-sm"
          >
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
}