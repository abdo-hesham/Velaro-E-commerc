import { Search, ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Header({ setPage }: { setPage: (page: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="px-6 lg:px-12 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button onClick={() => setPage('shop')} className="text-3xl font-display font-bold tracking-tighter">
            VELARO
          </button>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <button onClick={() => setPage('shop')} className="hover:text-gray-600 transition-colors">Shop</button>
          <button className="hover:text-gray-600 transition-colors flex items-center gap-1">
            Collections <ChevronRight size={14} className="rotate-90" />
          </button>
          <button className="hover:text-gray-600 transition-colors">Men</button>
          <button className="hover:text-gray-600 transition-colors">Women</button>
          <button className="hover:text-gray-600 transition-colors">Our Story</button>
        </nav>

        <div className="flex items-center gap-6">
          <button aria-label="Search" className="hover:text-gray-600 transition-colors">
            <Search size={20} />
          </button>
          <button aria-label="Cart" className="hover:text-gray-600 transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
