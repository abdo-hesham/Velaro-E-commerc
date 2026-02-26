import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, ChevronRight, Heart, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductPage({ productId, onProductSelect }: { productId: string, onProductSelect: (id: string) => void }) {
  const product = products.find(p => p.id === productId) || products[0];
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 uppercase tracking-wider text-xs" aria-label="Breadcrumb">
        <button className="hover:text-black transition-colors" onClick={() => onProductSelect('')}>Shop</button>
        <ChevronRight size={14} />
        <button className="hover:text-black transition-colors">{product.category}</button>
        <ChevronRight size={14} />
        <span className="text-black font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        {/* Product Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 flex-shrink-0 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-24 md:w-full md:h-32 flex-shrink-0 border-2 transition-colors ${selectedImage === idx ? 'border-black' : 'border-transparent hover:border-gray-200'}`}
                aria-label={`View image ${idx + 1}`}
              >
                <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
          <div className="flex-1 bg-gray-100 aspect-[4/5] relative">
            <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tighter uppercase">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-medium">EGP {product.price.toFixed(2)}</span>
              <div className="flex items-center gap-1 text-sm">
                <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <span className="text-gray-500 ml-1">(128 reviews)</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wider">Color</h3>
            <div className="flex gap-3">
              {['bg-black', 'bg-gray-400', 'bg-stone-300'].map((color, idx) => (
                <button key={idx} className={`w-8 h-8 rounded-full ${color} border-2 border-white ring-1 ${idx === 0 ? 'ring-black' : 'ring-gray-200'} hover:ring-black transition-all`} aria-label={`Select color ${idx + 1}`} />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium uppercase tracking-wider">Size</h3>
              <button className="text-sm text-gray-500 underline hover:text-black transition-colors">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {['S', 'M', 'L', 'XL'].map((size, idx) => (
                <button key={size} className={`py-3 border text-sm font-medium transition-colors ${idx === 1 ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex items-center border border-gray-200 h-14">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 h-full hover:bg-gray-50 transition-colors" aria-label="Decrease quantity"><Minus size={16} /></button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 h-full hover:bg-gray-50 transition-colors" aria-label="Increase quantity"><Plus size={16} /></button>
            </div>
            <button className="flex-1 bg-black text-white h-14 flex items-center justify-center gap-2 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              <ShoppingBag size={20} />
              Add to Cart
            </button>
            <button className="w-14 h-14 border border-gray-200 flex items-center justify-center hover:border-black transition-colors" aria-label="Add to wishlist">
              <Heart size={20} />
            </button>
          </div>

          <div className="border-t border-gray-100 pt-8 space-y-4">
            <details className="group" open>
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none uppercase tracking-wider text-sm">
                Key Specs
                <span className="transition group-open:rotate-180">
                  <ChevronDown size={20} />
                </span>
              </summary>
              <div className="text-gray-600 text-sm mt-4 space-y-2 leading-relaxed">
                <p>• 100% Organic Cotton</p>
                <p>• Heavyweight 400gsm fleece</p>
                <p>• Relaxed, oversized fit</p>
                <p>• Machine wash cold, tumble dry low</p>
              </div>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none border-t border-gray-100 pt-4 uppercase tracking-wider text-sm">
                Shipping & Returns
                <span className="transition group-open:rotate-180">
                  <ChevronDown size={20} />
                </span>
              </summary>
              <div className="text-gray-600 text-sm mt-4 leading-relaxed">
                <p>Free standard shipping on orders over EGP 100. Returns accepted within 30 days of delivery. Items must be in original condition with tags attached.</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-3xl font-display font-bold mb-8 tracking-tighter uppercase">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} {...product} onSelect={onProductSelect} />
          ))}
        </div>
      </div>
    </main>
  );
}
