import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShoppingCart, Twitter, X, Star, Trash2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const reviewsRow1 = [
  { id: 1, name: 'Alex Johnson', handle: '@alexj_street', platform: 'twitter', text: 'Just copped the Nightfall Hoodie and the quality is insane! 🔥 Best streetwear brand right now.', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Sarah Miller', handle: '@sarahm_fits', platform: 'instagram', text: 'The fit on these tees is perfect. Not too baggy, not too tight. Just right.', avatar: 'https://i.pravatar.cc/150?u=2', image: 'https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg' },
  { id: 3, name: 'Mike Chen', handle: 'Mike Chen', platform: 'facebook', text: 'Fast shipping and the packaging was premium. Definitely coming back for more drops.', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Elena Rodriguez', handle: '@elena_styles', platform: 'instagram', text: 'Obsessed with the new collection. The materials feel so premium! 😍', avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'David Kim', handle: '@dkim_kicks', platform: 'twitter', text: 'Velaro never misses. Every drop is fire.', avatar: 'https://i.pravatar.cc/150?u=5' },
];

const reviewsRow2 = [
  { id: 6, name: 'Jessica Wong', handle: '@jessw_ootd', platform: 'instagram', text: 'Finally found a brand that understands oversized fits. The proportions are perfect.', avatar: 'https://i.pravatar.cc/150?u=6', image: 'https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg' },
  { id: 7, name: 'Marcus Thorne', handle: '@marcust_official', platform: 'twitter', text: 'Customer service is top tier. Had an issue with sizing and they sorted it out immediately. 💯', avatar: 'https://i.pravatar.cc/150?u=7' },
  { id: 8, name: 'Chloe Davis', handle: 'Chloe Davis', platform: 'facebook', text: 'Bought a jacket for my boyfriend and he hasn\'t taken it off since. Great quality!', avatar: 'https://i.pravatar.cc/150?u=8' },
  { id: 9, name: 'Ryan Patel', handle: '@ryanp_streetwear', platform: 'twitter', text: 'The Shadow Drip hoodie is my new daily driver. So comfortable.', avatar: 'https://i.pravatar.cc/150?u=9' },
  { id: 10, name: 'Sophie Taylor', handle: '@sophiet_looks', platform: 'instagram', text: 'Love the minimalist aesthetic. Goes with everything in my wardrobe.', avatar: 'https://i.pravatar.cc/150?u=10' },
];

const reviewsRow3 = [
  { id: 11, name: 'Jordan Lee', handle: '@jordanl_fits', platform: 'twitter', text: 'Just got my order and I\'m blown away. The attention to detail is crazy.', avatar: 'https://i.pravatar.cc/150?u=11' },
  { id: 12, name: 'Mia Thompson', handle: '@miat_style', platform: 'instagram', text: 'These are the most comfortable sweatpants I own. Need them in every color!', avatar: 'https://i.pravatar.cc/150?u=12', image: 'https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg' },
  { id: 13, name: 'Chris Evans', handle: 'Chris Evans', platform: 'facebook', text: 'Great value for the price. Feels like luxury streetwear without the crazy markup.', avatar: 'https://i.pravatar.cc/150?u=13' },
  { id: 14, name: 'Olivia Brown', handle: '@oliviab_fashion', platform: 'instagram', text: 'The designs are so unique. I always get compliments when I wear Velaro.', avatar: 'https://i.pravatar.cc/150?u=14' },
  { id: 15, name: 'Daniel Garcia', handle: '@danielg_kicks', platform: 'twitter', text: '10/10 would recommend. The shipping was super fast too.', avatar: 'https://i.pravatar.cc/150?u=15' },
];

const ReviewCard = ({ review }: { review: any }) => {
  const Icon = review.platform === 'twitter' ? Twitter : review.platform === 'instagram' ? Instagram : Facebook;
  const iconColor = review.platform === 'twitter' ? 'text-blue-400' : review.platform === 'instagram' ? 'text-pink-500' : 'text-blue-600';
  
  return (
    <div className="w-[350px] md:w-[400px] flex-shrink-0 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow mx-3">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
          <div>
            <h4 className="font-bold text-sm">{review.name}</h4>
            <p className="text-xs text-gray-500">{review.handle}</p>
          </div>
        </div>
        <Icon size={20} className={iconColor} />
      </div>
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{review.text}</p>
      {review.image && (
        <div className="rounded-xl overflow-hidden h-48 w-full mt-4">
          <img src={review.image} alt="Review attachment" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      )}
    </div>
  );
};

function ShopPage({ onQuickView, onAddToCart }: { onQuickView: (product: any) => void, onAddToCart: (product: any) => void }) {
  const products = [
    { id: 1, title: 'WHITE SUMMER TEE', desc: 'Lightweight and breathable, the BreezeFit White Summer Tee keeps you cool and fresh all summer long.', category: 'Tees', rating: 5.0, reviews: '1.2k', price: '$45.00', images: ['https://i.postimg.cc/HkCFhL12/Whats-App-Image-2026-02-21-at-5-47-46-AM-(6).jpg', 'https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg'], sku: 'TEE-WHT-01' },
    { id: 2, title: 'BLACK SUMMER TEE', desc: 'Stay stylish and comfortable in the CoolCore Black Summer Tee, crafted from breathable fabric perfect for warm days.', category: 'Tees', rating: 5.0, reviews: '1.2k', price: '$45.00', images: ['https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg', 'https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg'], sku: 'TEE-BLK-01' },
    { id: 3, title: 'SLEEK IPHONE CASE', desc: 'Durable and slim, the SleekGuard iPhone Case offers stylish protection against drops and scratches.', category: 'Accessories', rating: 4.4, reviews: '1k', price: '$29.90', images: ['https://i.postimg.cc/NjwZz0v7/Whats-App-Image-2026-02-21-at-5-47-46-AM-(3).jpg', 'https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg'], sku: 'ACC-IPH-01' },
    { id: 4, title: 'SPRING JACKET', desc: 'Lightweight and versatile, the BreezeLite Spring Jacket combines comfort and style to keep you cozy on breezy days.', category: 'Outerwear', rating: 4.8, reviews: '100', price: '$120.00', images: ['https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg', 'https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg'], sku: 'JKT-SPR-01' },
    { id: 5, title: 'SUMMER CAP', desc: 'Stay cool and protected with the SunShade Summer Cap, featuring breathable fabric and UV protection for sunny days.', category: 'Accessories', rating: 5.0, reviews: '1.2k', price: '$35.00', images: ['https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg', 'https://i.postimg.cc/HkCFhL12/Whats-App-Image-2026-02-21-at-5-47-46-AM-(6).jpg'], sku: 'ACC-CAP-01' },
    { id: 6, title: 'URBAN PHANTOM', desc: 'A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.', category: 'Hoodies', rating: 4.8, reviews: '2.4k', price: '$89.00', images: ['https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg', 'https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg'], sku: 'HDY-URB-01' },
    { id: 7, title: 'NEON REBELLION', desc: 'A statement piece with vibrant neon details and rebellious street art influences for a standout look.', category: 'Hoodies', rating: 4.9, reviews: '120', price: '$95.00', images: ['https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg', 'https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg'], sku: 'HDY-NEO-01' },
    { id: 8, title: 'SHADOW DRIP', desc: 'A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.', category: 'Hoodies', rating: 5.0, reviews: '1.2k', price: '$89.00', images: ['https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg', 'https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg'], sku: 'HDY-SHD-01' },
    { id: 9, title: 'ESSENTIAL TEE', desc: 'The perfect everyday tee, crafted from premium cotton for ultimate comfort and durability.', category: 'Tees', rating: 4.8, reviews: '2.4k', price: '$40.00', images: ['https://i.postimg.cc/HkCFhL12/Whats-App-Image-2026-02-21-at-5-47-46-AM-(6).jpg', 'https://i.postimg.cc/NjwZz0v7/Whats-App-Image-2026-02-21-at-5-47-46-AM-(3).jpg'], sku: 'TEE-ESS-01' },
  ];

  return (
    <div className="px-12 lg:px-24 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map(product => (
          <div key={product.id} className="flex flex-col group cursor-pointer" onClick={() => onQuickView(product)}>
            <div className="bg-gray-100 rounded-3xl aspect-[4/5] relative mb-6 overflow-hidden">
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-sm z-10 uppercase tracking-wide">
                {product.category}
              </div>
              <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" referrerPolicy="no-referrer" />
              <img src={product.images[1]} alt={product.title} className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-display font-bold text-xl text-gray-900 uppercase tracking-tight">{product.title}</h3>
              <span className="font-bold text-lg text-gray-900">{product.price}</span>
            </div>
            
            <div className="flex items-center gap-1.5 mb-6 text-xs text-gray-500 font-medium">
              <Star size={14} className="text-[#ff9900]" fill="currentColor" stroke="none" />
              <span className="text-gray-700">{product.rating}</span>
              <span>({product.reviews} Reviews)</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-20 pt-8 border-t border-gray-200">
        <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-black transition-colors">
          <ArrowLeft size={16} /> Previous
        </button>
        
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-900">1</button>
          <button className="w-8 h-8 rounded-md hover:bg-gray-50 flex items-center justify-center text-sm font-bold text-gray-500">2</button>
          <button className="w-8 h-8 rounded-md hover:bg-gray-50 flex items-center justify-center text-sm font-bold text-gray-500">3</button>
          <span className="text-gray-400 font-bold px-1">...</span>
          <button className="w-8 h-8 rounded-md hover:bg-gray-50 flex items-center justify-center text-sm font-bold text-gray-500">8</button>
          <button className="w-8 h-8 rounded-md hover:bg-gray-50 flex items-center justify-center text-sm font-bold text-gray-500">9</button>
          <button className="w-8 h-8 rounded-md hover:bg-gray-50 flex items-center justify-center text-sm font-bold text-gray-500">10</button>
        </div>

        <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-black transition-colors">
          Next <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'shop'>('home');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const slideDuration = 4000; // 4 seconds per slide
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quickViewProduct) {
      setActiveImageIndex(0);
    }
  }, [quickViewProduct]);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1, id: product.id || Date.now() }];
    });
    setIsCartOpen(true);
    if (quickViewProduct) {
      setQuickViewProduct(null);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const cartTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + (price * item.quantity);
  }, 0);

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320 + 16; // card width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const carouselItems = [
    { title: 'WHITE SUMMER TEE', desc: 'Lightweight and breathable, the BreezeFit White Summer Tee keeps you cool and fresh all summer long.', images: ['https://i.postimg.cc/HkCFhL12/Whats-App-Image-2026-02-21-at-5-47-46-AM-(6).jpg', 'https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg'] },
    { title: 'BLACK SUMMER TEE', desc: 'Stay stylish and comfortable in the CoolCore Black Summer Tee, crafted from breathable fabric perfect for warm days.', images: ['https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg', 'https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg'] },
    { title: 'SLEEK IPHONE CASE', desc: 'Durable and slim, the SleekGuard iPhone Case offers stylish protection against drops and scratches.', images: ['https://i.postimg.cc/NjwZz0v7/Whats-App-Image-2026-02-21-at-5-47-46-AM-(3).jpg', 'https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg'] },
    { title: 'SPRING JACKET', desc: 'Lightweight and versatile, the BreezeLite Spring Jacket combines comfort and style to keep you cozy on breezy days.', images: ['https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg', 'https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg'] },
    { title: 'SUMMER CAP', desc: 'Stay cool and protected with the SunShade Summer Cap, featuring breathable fabric and UV protection for sunny days.', images: ['https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg', 'https://i.postimg.cc/HkCFhL12/Whats-App-Image-2026-02-21-at-5-47-46-AM-(6).jpg'] },
  ];

  const infiniteItems = Array(20).fill(carouselItems).flat();

  useEffect(() => {
    if (carouselRef.current) {
      // Start in the middle of the duplicated array so user can scroll left or right infinitely
      carouselRef.current.scrollLeft = (320 + 16) * carouselItems.length * 10;
    }
  }, []);

  const slides = [
    {
      id: '01',
      title: 'LIMITED DROPS,\nMAXIMUM IMPACT',
      subtitle: 'Limited Drops, Maximum\nImpact',
      description: 'Exclusive designs, premium materials, and street-ready vibes—these must-have pieces are setting the trend.',
      image: 'https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg',
    },
    {
      id: '02',
      title: 'BUILT FOR\nTHE STREETS',
      subtitle: 'Built for the Streets',
      description: 'From the streets to your style—our journey is all about self-expression and rebellion.',
      image: 'https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg',
    },
    {
      id: '03',
      title: 'ART MEETS\nATTITUDE',
      subtitle: 'Art Meets Attitude',
      description: 'A statement piece with vibrant neon details and rebellious street art influences for a standout look.',
      image: 'https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg',
    },
    {
      id: '04',
      title: 'FUTURE-READY\nFASHION',
      subtitle: 'Future-Ready Fashion',
      description: 'Streetwear designed for those who break the mold. Limited drops, bold designs, and premium quality.',
      image: 'https://i.postimg.cc/QdrvyMZp/Whats-App-Image-2026-02-21-at-5-47-46-AM-(1).jpg',
    },
    {
      id: '05',
      title: 'COMMUNITY-DRIVEN\nCULTURE',
      subtitle: 'Community-Driven Culture',
      description: 'More than just a brand, we\'re a movement—connecting creatives, skaters, and trendsetters who define the streets.',
      image: 'https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg',
    }
  ];

  useEffect(() => {
    const interval = 50; // Update progress every 50ms
    const step = (interval / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white text-xs py-2 px-12 lg:px-24 flex justify-between items-center">
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300"><Facebook size={14} /></a>
          <a href="#" className="hover:text-gray-300"><Instagram size={14} /></a>
          <a href="#" className="hover:text-gray-300"><Twitter size={14} /></a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300 font-medium">Contact</a>
          <a href="#" className="hover:text-gray-300 font-medium">Support</a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-6 px-12 lg:px-24 flex justify-between items-center">
        <div 
          className="text-4xl font-display font-bold tracking-tighter cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >VELARO</div>
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-xl font-display uppercase tracking-wide">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('shop'); }} className="hover:text-gray-600">Shop</a>
          </div>
          <button onClick={() => setIsCartOpen(true)} className="hover:text-gray-600 ml-2 relative">
            <ShoppingCart size={26} strokeWidth={1.5} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            {/* Hero Section */}
            <section className="px-12 lg:px-24 py-6">
          <div className="bg-[#1a1a1a] rounded-[2rem] overflow-hidden relative h-[700px]">
            {/* Hero Images */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
                  index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
                }`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              </div>
            ))}
            
            {/* Hero Content */}
            <div className="absolute inset-0 p-16 flex flex-col justify-center max-w-3xl z-10 pointer-events-none">
              <h1 className="text-white text-[5.5rem] font-display font-bold leading-[0.85] tracking-tighter mb-6 whitespace-pre-line pointer-events-auto">
                {slides[currentSlide].title}
              </h1>
              <p className="text-white/70 text-lg mb-10 max-w-xl font-medium leading-relaxed pointer-events-auto">
                {slides[currentSlide].description}
              </p>
              <div className="pointer-events-auto w-fit">
                <button 
                  onClick={() => setCurrentPage('shop')}
                  className="bg-white text-black rounded-full pl-6 pr-2 py-2 flex items-center gap-4 text-sm font-bold tracking-wide hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Shop now 
                  <span className="bg-black text-white rounded-full p-2">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>

            {/* Hero Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-12 flex gap-4 z-20">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className="flex-1 relative cursor-pointer group"
                  onClick={() => {
                    setCurrentSlide(index);
                    setProgress(0);
                  }}
                >
                  {/* Base Line */}
                  <div className="h-[2px] w-full bg-white/20 absolute top-0 left-0 transition-colors group-hover:bg-white/40"></div>
                  
                  {/* Progress Line */}
                  <div 
                    className="h-[2px] bg-white absolute top-0 left-0 transition-all duration-75 ease-linear"
                    style={{ 
                      width: index === currentSlide ? `${progress}%` : index < currentSlide ? '100%' : '0%' 
                    }}
                  ></div>

                  {/* Content */}
                  <div className={`pt-6 transition-colors duration-300 ${
                    index === currentSlide ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                  }`}>
                    <div className="font-display text-2xl font-bold mb-2">{slide.id}</div>
                    <div className="text-sm font-medium whitespace-pre-line leading-tight">{slide.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Drops Section */}
        <section className="px-12 lg:px-24 py-16">
          <div className="max-w-2xl mb-12">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">NEW DROPS</h2>
            <p className="text-gray-500">Stand out with our latest collection—bold designs, premium fabrics, and street-ready fits. Once they're gone, they're gone. Don't miss out!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div 
              className="group cursor-pointer"
              onClick={() => setQuickViewProduct({ title: 'SHADOW DRIP', desc: 'A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.', images: ['https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg', 'https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg'], price: '$89', sku: 'SHD-DRP-01' })}
            >
              <div className="relative bg-gray-100 rounded-3xl overflow-hidden aspect-[4/5] mb-6">
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide">New</div>
                <img src="https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg" alt="Shadow Drip" className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" referrerPolicy="no-referrer" />
                <img src="https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg" alt="Shadow Drip" className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold mb-2">SHADOW DRIP</h3>
              <p className="text-gray-500 text-sm mb-4">A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.</p>
              <div className="flex gap-3 items-center">
                <span className="font-bold">$89</span>
                <span className="text-gray-400 line-through text-sm">$129</span>
              </div>
            </div>

            {/* Product 2 */}
            <div 
              className="group cursor-pointer"
              onClick={() => setQuickViewProduct({ title: 'URBAN PHANTOM', desc: 'Urban Phantom - A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.', images: ['https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg', 'https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg'], price: '$89', sku: 'URB-PHN-02' })}
            >
              <div className="relative bg-gray-100 rounded-3xl overflow-hidden aspect-[4/5] mb-6">
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide">New</div>
                <img src="https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg" alt="Urban Phantom" className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" referrerPolicy="no-referrer" />
                <img src="https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg" alt="Urban Phantom" className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold mb-2">URBAN PHANTOM</h3>
              <p className="text-gray-500 text-sm mb-4">Urban Phantom - A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.</p>
              <div className="flex gap-3 items-center">
                <span className="font-bold">$89</span>
                <span className="text-gray-400 line-through text-sm">$129</span>
              </div>
            </div>

            {/* Product 3 */}
            <div 
              className="group cursor-pointer"
              onClick={() => setQuickViewProduct({ title: 'NEON REBELLION', desc: 'A statement piece with vibrant neon details and rebellious street art influences for a standout look.', images: ['https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg', 'https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg'], price: '$89', sku: 'NEO-REB-03' })}
            >
              <div className="relative bg-gray-100 rounded-3xl overflow-hidden aspect-[4/5] mb-6">
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide">New</div>
                <img src="https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg" alt="Neon Rebellion" className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" referrerPolicy="no-referrer" />
                <img src="https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg" alt="Neon Rebellion" className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold mb-2">NEON REBELLION</h3>
              <p className="text-gray-500 text-sm mb-4">A statement piece with vibrant neon details and rebellious street art influences for a standout look.</p>
              <div className="flex gap-3 items-center">
                <span className="font-bold">$89</span>
                <span className="text-gray-400 line-through text-sm">$129</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-12 lg:px-24 py-16">
          <div className="max-w-3xl mb-12">
            <h2 className="text-[3.5rem] font-display font-bold mb-4 tracking-tighter leading-[1] uppercase">SHIP YOUR WEBSITE QUICKLY WITH<br/>FRAMEBLOX</h2>
            <p className="text-gray-500 font-medium max-w-2xl">Use prebuilt templates and components for a professional, stunning look. Save time and focus on content with our user-friendly, customizable design solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top Left Image */}
            <div className="md:col-span-2 rounded-[2rem] overflow-hidden h-[450px] relative">
              <img src="https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg" alt="Orange Hoodie" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            
            {/* Top Right Black Card */}
            <div className="md:col-span-1 bg-[#111111] text-white rounded-[2rem] p-10 flex flex-col justify-end h-[450px]">
              <h3 className="text-3xl font-display font-bold mb-4 leading-tight uppercase tracking-tight">BUILT BY THE STREETS, MADE FOR YOU</h3>
              <p className="text-gray-400 mb-8 text-sm font-medium leading-relaxed">From the streets to your style—our journey is all about self-expression and rebellion. Join the movement.</p>
              <div>
                <button className="bg-white text-black rounded-full pl-5 pr-1.5 py-1.5 flex items-center gap-3 text-sm font-bold tracking-wide hover:bg-gray-200 transition-colors w-fit">
                  Read our story 
                  <span className="bg-[#111111] text-white rounded-full p-2">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Left Gray Card */}
            <div className="md:col-span-1 bg-[#e5e5e5] rounded-[2rem] p-10 flex flex-col justify-end h-[450px]">
              <h3 className="text-3xl font-display font-bold mb-4 leading-tight text-[#111111] uppercase tracking-tight">ELEVATE YOUR STREET GAME</h3>
              <p className="text-gray-500 mb-8 text-sm font-medium leading-relaxed">From bold graphics to everyday essentials, explore our latest drops and signature pieces designed for the culture.</p>
              <div>
                <button 
                  onClick={() => setCurrentPage('shop')}
                  className="bg-[#111111] text-white rounded-full pl-5 pr-1.5 py-1.5 flex items-center gap-3 text-sm font-bold tracking-wide hover:bg-gray-800 transition-colors w-fit"
                >
                  Shop collections 
                  <span className="bg-white text-black rounded-full p-2">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Right Image */}
            <div className="md:col-span-2 rounded-[2rem] overflow-hidden h-[450px] relative">
              <img src="https://i.postimg.cc/HkCFhL12/Whats-App-Image-2026-02-21-at-5-47-46-AM-(6).jpg" alt="White Tee" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-12 lg:px-24 py-24 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl mb-4 text-gray-600">Streetwear with a Story</p>
              <h2 className="text-7xl font-bold leading-[0.9] tracking-tighter">WEAR THE<br/>MOVEMENT,<br/>BREAK THE<br/>MOLD.</h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <p>Born from the pulse of the streets, our brand is a tribute to the rebels, the dreamers, and the rule-breakers who shape the culture. Inspired by the raw energy of city life—graffiti-covered alleys, underground music scenes, and late-night skate sessions—we craft streetwear that speaks to individuality and self-expression.</p>
              <p>Every stitch, every design, and every drop is a reflection of the movement, blending bold graphics, oversized silhouettes, and urban edge. More than just clothing, we're a statement—wear your story, break the mold, and define your own path.</p>
              <div className="pt-4">
                <button className="bg-black text-white border border-black rounded-full px-8 py-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
                  Get it now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Drops Carousel */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-3xl mx-auto mb-12 px-12 lg:px-24">
            <h2 className="text-[3.5rem] font-display font-bold mb-4 tracking-tighter leading-[1] uppercase">FEATURED DROPS: STAND OUT, STAY<br/>AHEAD</h2>
            <p className="text-gray-500 font-medium">Exclusive designs, premium materials, and street-ready vibes—these must-have pieces are setting the trend. Get yours before they're gone!</p>
          </div>

          <div 
            ref={carouselRef}
            className="flex gap-4 px-4 overflow-x-auto pb-8 snap-x no-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteItems.map((item, idx) => (
              <div 
                key={idx} 
                className="min-w-[320px] h-[480px] relative rounded-3xl overflow-hidden snap-center group flex-shrink-0 cursor-pointer"
                onClick={() => setQuickViewProduct({ ...item, price: '$89.00', sku: `FEAT-${idx}`, rating: 5.0, reviews: '1.2k' })}
              >
                <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" referrerPolicy="no-referrer" />
                <img src={item.images[1]} alt={item.title} className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white z-10 transition-opacity duration-500 group-hover:opacity-0">
                  <h3 className="text-2xl font-display font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-white/80 text-xs font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 max-w-3xl mx-auto px-12 lg:px-24 mt-2">
            <button 
              onClick={() => scrollCarousel('left')}
              className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-white hover:text-black hover:border hover:border-black transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-white hover:text-black hover:border hover:border-black transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* Product Feature Section */}
        <section className="bg-[#1a1a1a] text-white py-24 px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-7xl font-bold leading-[0.9] tracking-tighter mb-6">NIGHTFALL<br/>OVERSIZED<br/>HOODIE</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">A heavyweight, ultra-soft hoodie designed for comfort and style. Featuring a relaxed fit, subtle embroidered detailing, and a faded wash for that perfect worn-in look. Street-ready and built to stand out.</p>
              
              <div className="flex gap-4 items-center mb-10">
                <span className="text-3xl font-bold">$89</span>
                <span className="text-gray-500 line-through text-xl">$129</span>
              </div>

              <button className="bg-white text-black rounded-full px-8 py-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                Shop now <ArrowRight size={16} />
              </button>
            </div>

            <div className="relative">
              <div 
                className="rounded-3xl overflow-hidden aspect-[4/5] mb-6 cursor-pointer group relative"
                onClick={() => setQuickViewProduct({ title: 'NIGHTFALL OVERSIZED HOODIE', desc: 'A heavyweight, ultra-soft hoodie designed for comfort and style. Featuring a relaxed fit, subtle embroidered detailing, and a faded wash for that perfect worn-in look. Street-ready and built to stand out.', images: ['https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg', 'https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg'], price: '$89.00', sku: 'HDY-NGT-01', rating: 4.9, reviews: '3.1k' })}
              >
                <img src="https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg" alt="Nightfall Hoodie" className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" referrerPolicy="no-referrer" />
                <img src="https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg" alt="Nightfall Hoodie" className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-white cursor-pointer flex-shrink-0">
                  <img src="https://i.postimg.cc/3xHzcwQ2/Whats-App-Image-2026-02-21-at-5-47-45-AM.jpg" alt="Thumb 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-transparent opacity-50 hover:opacity-100 cursor-pointer flex-shrink-0 transition-opacity">
                  <img src="https://i.postimg.cc/4NcrP9qW/Whats-App-Image-2026-02-21-at-5-47-45-AM-(2).jpg" alt="Thumb 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-transparent opacity-50 hover:opacity-100 cursor-pointer flex-shrink-0 transition-opacity">
                  <img src="https://i.postimg.cc/13Zbjz1M/Whats-App-Image-2026-02-21-at-5-47-46-AM.jpg" alt="Thumb 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-transparent opacity-50 hover:opacity-100 cursor-pointer flex-shrink-0 transition-opacity">
                  <img src="https://i.postimg.cc/Gm165pnF/Whats-App-Image-2026-02-21-at-5-47-46-AM-(2).jpg" alt="Thumb 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Movement Banner */}
        <section className="px-12 lg:px-24 py-8">
          <div className="relative rounded-[3rem] overflow-hidden h-[600px] flex items-center p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-600 mix-blend-multiply z-10"></div>
            <img src="https://i.postimg.cc/QdrvyMZp/Whats-App-Image-2026-02-21-at-5-47-46-AM-(1).jpg" alt="Join Movement" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
            
            <div className="relative z-20 max-w-2xl text-white">
              <h2 className="text-7xl font-bold leading-[0.9] tracking-tighter mb-6">JOIN THE<br/>MOVEMENT.<br/>WEAR THE<br/>FUTURE.</h2>
              <p className="text-xl text-white/80 mb-10 max-w-md">Streetwear designed for those who break the mold. Limited drops, bold designs, and premium quality—don't miss out.</p>
              
              <button className="bg-white text-black rounded-full px-8 py-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors">
                Shop now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Why Shop With Us */}
        <section className="py-24 px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-bold mb-6 tracking-tight">WHY SHOP WITH US?</h2>
              <p className="text-gray-500">We've got you covered with hassle-free shopping, top-tier service, and guarantees that keep you confident in every purchase.</p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center mb-6">
                  <ShoppingCart size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase font-display">FREE DELIVERY</h3>
                <p className="text-gray-500 text-sm">Get your streetwear fast and free, with no extra shipping costs on all orders.</p>
              </div>
              
              <div>
                <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center mb-6">
                  <ShoppingCart size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase font-display">100% SECURE PAYMENT</h3>
                <p className="text-gray-500 text-sm">Shop with confidence using encrypted, safe, and trusted payment methods.</p>
              </div>
              
              <div>
                <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center mb-6">
                  <ShoppingCart size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase font-display">30 DAYS RETURN</h3>
                <p className="text-gray-500 text-sm">Not the perfect fit? No worries. Return or exchange hassle-free within 30 days.</p>
              </div>
              
              <div>
                <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center mb-6">
                  <ShoppingCart size={20} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase font-display">24/7 SUPPORT</h3>
                <p className="text-gray-500 text-sm">Got questions? Our team is here for you anytime, anywhere.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Infinite Review Sliders */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-12 lg:px-24 mb-16 text-center">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">THE STREETS ARE TALKING</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Don't just take our word for it. See what the community is saying about our latest drops.</p>
          </div>

          <div className="flex flex-col gap-8 relative pause-on-hover">
            {/* Row 1 - Left */}
            <div className="flex w-max animate-scroll-left">
              {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
                <ReviewCard key={`r1-${idx}`} review={review} />
              ))}
            </div>

            {/* Row 2 - Right */}
            <div className="flex w-max animate-scroll-right">
              {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
                <ReviewCard key={`r2-${idx}`} review={review} />
              ))}
            </div>

            {/* Row 3 - Left */}
            <div className="flex w-max animate-scroll-left">
              {[...reviewsRow3, ...reviewsRow3].map((review, idx) => (
                <ReviewCard key={`r3-${idx}`} review={review} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-100 py-24 px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 tracking-tight leading-none">SUBSCRIBE TO OUR<br/>NEWSLETTER NOW!</h2>
              <p className="text-gray-500">Get top Framer components, exclusive freebies, and expert tips delivered to your inbox weekly.</p>
            </div>
            <div>
              <form className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="jane@email.com" 
                  className="flex-1 rounded-full px-6 py-4 border border-gray-300 focus:outline-none focus:border-black"
                />
                <button type="submit" className="bg-black text-white border border-black rounded-full px-8 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4 px-6">Weekly newsletter. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
          </>
        ) : (
          <ShopPage onQuickView={setQuickViewProduct} onAddToCart={addToCart} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 px-12 lg:px-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 relative z-10">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-6">VELARO</h3>
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider font-bold">STREETWEAR FOR THE BOLD, BUILT FOR THE MOVEMENT.</p>
            <p className="text-gray-500 text-sm mb-12">Inspired by the raw energy of the streets, we create statement pieces that blend style, attitude, and individuality.</p>
            <p className="text-gray-600 text-xs">© 2025 Copyright</p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm">MENU</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Story</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm">SHOP</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New arrival</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Men collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Category</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm">SOCIAL</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Instagram size={16} /> Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Twitter size={16} /> Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Facebook size={16} /> Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Tiktok</a></li>
            </ul>
          </div>
        </div>
        
        {/* Giant Background Text */}
        <div className="absolute bottom-[-10%] left-0 right-0 text-[20vw] font-display font-bold text-white/[0.03] leading-none text-center pointer-events-none whitespace-nowrap">
          VELARO
        </div>
      </footer>
      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity" onClick={() => setQuickViewProduct(null)}></div>
          <div className="relative bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-6 right-6 z-20 p-2.5 bg-white/80 hover:bg-white text-gray-900 rounded-full shadow-sm backdrop-blur-sm transition-all hover:scale-110"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative bg-gray-50 flex flex-col">
              <div className="flex-grow relative">
                <img src={quickViewProduct.images?.[activeImageIndex] || quickViewProduct.img} alt={quickViewProduct.title} className="w-full h-full object-cover absolute inset-0" referrerPolicy="no-referrer" />
              </div>
              {quickViewProduct.images && quickViewProduct.images.length > 1 && (
                <div className="flex gap-2 p-4 overflow-x-auto bg-white border-t border-gray-100">
                  {quickViewProduct.images.map((img: string, idx: number) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt={`${quickViewProduct.title} thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Details Section */}
            <div className="w-full md:w-1/2 p-8 md:p-14 overflow-y-auto flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">New Arrival</span>
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                    <Star size={14} className="text-[#ff9900]" fill="currentColor" stroke="none" />
                    <span>{quickViewProduct.rating || '5.0'}</span>
                    <span className="text-gray-400">({quickViewProduct.reviews || '1.2k'})</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4 text-gray-900">{quickViewProduct.title}</h2>
                <div className="text-3xl font-medium text-gray-900 mb-6">{quickViewProduct.price || '$89.00'}</div>
                <p className="text-gray-600 leading-relaxed text-lg">{quickViewProduct.desc}</p>
              </div>
              
              <div className="space-y-8 mb-10 flex-grow">
                {/* Color Selection */}
                <div>
                  <div className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex justify-between">
                    <span>Color</span>
                    <span className="text-gray-500 font-medium">Selected: Black</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['#111111', '#4a5568', '#e2e8f0', '#f5f5f5'].map((color, i) => (
                      <button 
                        key={i} 
                        className={`w-10 h-10 rounded-full border-2 ${i === 0 ? 'border-black p-0.5' : 'border-transparent'} transition-all hover:scale-110`}
                      >
                        <div className="w-full h-full rounded-full border border-gray-200" style={{ backgroundColor: color }}></div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Size Selection */}
                <div>
                  <div className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex justify-between">
                    <span>Size</span>
                    <button className="text-gray-500 font-medium underline hover:text-black transition-colors">Size Guide</button>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, i) => (
                      <button 
                        key={size}
                        className={`py-3 rounded-xl text-sm font-bold transition-all ${i === 2 ? 'bg-black text-white shadow-md' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-auto pt-6 border-t border-gray-100">
                <button className="w-14 h-14 flex-shrink-0 rounded-2xl border-2 border-gray-200 flex items-center justify-center hover:border-black hover:bg-gray-50 transition-all text-gray-900">
                  <ShoppingCart size={22} />
                </button>
                <button 
                  onClick={() => addToCart(quickViewProduct)}
                  className="flex-grow bg-black text-white border border-black rounded-2xl py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold uppercase tracking-tight">Your Cart ({cartItemCount})</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <ShoppingCart size={48} strokeWidth={1} />
                  <p className="text-lg font-medium">Your cart is empty</p>
                  <button 
                    onClick={() => {
                      setIsCartOpen(false);
                      setCurrentPage('shop');
                    }}
                    className="bg-black text-white border border-black px-8 py-3 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-black transition-colors mt-4"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={item.images?.[0] || item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-display font-bold text-lg uppercase leading-tight pr-4">{item.title}</h3>
                            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-gray-500 text-sm mt-1">{item.price}</p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-gray-200 rounded-full">
                            <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 rounded-l-full transition-colors">-</button>
                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 rounded-r-full transition-colors">+</button>
                          </div>
                          <span className="font-bold">
                            ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-medium">Subtotal</span>
                  <span className="text-2xl font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">Shipping and taxes calculated at checkout.</p>
                <button className="w-full bg-black text-white border border-black rounded-2xl py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-black hover:shadow-lg transition-all">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
