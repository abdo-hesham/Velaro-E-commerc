import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-display font-bold mb-4 tracking-tighter">VELARO</h3>
          <p className="text-sm text-gray-500 mb-6">Modern essentials for the contemporary lifestyle. Designed for comfort, built for the streets.</p>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-black transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-black transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-black transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-black transition-colors">All Products</a></li>
            <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Collections</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Support</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="bg-white border border-gray-200 px-4 py-2 text-sm w-full focus:outline-none focus:border-black transition-colors" aria-label="Email address" />
            <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors uppercase tracking-wider">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} VELARO. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
