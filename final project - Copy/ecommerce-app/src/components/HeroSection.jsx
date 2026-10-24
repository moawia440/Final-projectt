import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 my-6">
      {/* Left Sidebar */}
      <div className="border-r border-gray-200 pr-4 hidden md:block space-y-3 text-sm">
        {categories.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-gray-700 hover:text-black cursor-pointer py-1">
            <span>{item}</span>
            {(index === 0 || index === 1) && <ChevronRight size={16} />}
          </div>
        ))}
      </div>

      {/* Hero Banner Slider */}
      <div className="md:col-span-3 bg-black text-white p-8 md:p-12 rounded flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="space-y-4 max-w-md z-10">
          <div className="flex items-center gap-3">
            <span className="text-2xl"></span>
            <span className="text-sm tracking-wider">iPhone 14 Series</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Up to 10% off Voucher</h2>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold border-b border-white pb-1 w-max pt-2">
            <span>Shop Now</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-6 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80" 
            alt="iPhone 14" 
            className="w-80 object-contain"
          />
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white cursor-pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
}