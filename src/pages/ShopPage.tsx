import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ShopPage({ onProductSelect }: { onProductSelect: (id: string) => void }) {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2 tracking-tighter uppercase">Shop All</h1>
          <p className="text-gray-500">Discover our latest collection of contemporary essentials.</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors flex-1 md:flex-none justify-center uppercase tracking-wider">
            <SlidersHorizontal size={16} />
            Filters
          </button>
          <div className="relative flex-1 md:flex-none">
            <select className="w-full appearance-none border border-gray-200 px-4 py-2 pr-10 text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:border-black bg-transparent cursor-pointer uppercase tracking-wider" aria-label="Sort by">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map(product => (
          <ProductCard key={product.id} {...product} onSelect={onProductSelect} />
        ))}
      </div>
    </main>
  );
}
