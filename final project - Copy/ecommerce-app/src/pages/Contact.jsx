import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('يرجى ملء كافة الحقول الأساسية المطلوبة');
      return;
    }
    alert('شكرًا لتواصلك معنا! تم إرسال رسالتك بنجاح وسنرد عليك خلال 24 ساعة.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-10">
        <Link to="/" className="hover:underline">Home</Link> / <span className="text-black font-semibold">Contact</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Contact Information Cards */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded border border-gray-100 p-8 space-y-8">
          {/* Call To Us */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 text-white p-3 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <h3 className="font-bold text-base">Call To Us</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-xs font-semibold text-gray-800">
              Phone: +8801611112222
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Write To Us */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 text-white p-3 rounded-full flex items-center justify-center">
                <Mail size={20} />
              </div>
              <h3 className="font-bold text-base">Write To Us</h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-xs font-semibold text-gray-800">
              Emails: customer@exclusive.com
            </p>
            <p className="text-xs font-semibold text-gray-800">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name *" 
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-100 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email *" 
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-100 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Your Phone *" 
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-100 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <textarea 
              name="message"
              rows="6" 
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded p-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-500 resize-none"
            ></textarea>

            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-red-500 text-white px-10 py-3.5 rounded text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}