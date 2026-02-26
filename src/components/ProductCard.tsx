import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  onSelect: (id: string) => void;
}

export default function ProductCard({ id, name, price, image, category, onSelect }: ProductCardProps) {
  return (
    <div className="group flex flex-col gap-4">
      <div 
        className="relative aspect-[4/5] bg-gray-100 overflow-hidden cursor-pointer"
        onClick={() => onSelect(id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onSelect(id)}
      >
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
        <button 
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-black py-3 px-4 flex items-center justify-center gap-2 font-medium text-sm translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300 hover:bg-black hover:text-white uppercase tracking-wider"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic
          }}
          aria-label={`Quick add ${name} to cart`}
        >
          <ShoppingBag size={16} />
          Quick Add
        </button>
      </div>
      <div>
        <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{category}</div>
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-medium text-gray-900 leading-tight cursor-pointer hover:underline" onClick={() => onSelect(id)}>{name}</h3>
          <span className="font-medium whitespace-nowrap">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
