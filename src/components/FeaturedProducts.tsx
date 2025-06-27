
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Star } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Serenity Garden Set',
      price: 89,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop',
      mood: 'Calming',
      rating: 4.9,
      reviews: 234,
      description: 'Handfolded lotus and lily collection'
    },
    {
      id: 2,
      name: 'Romantic Cranes',
      price: 156,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop',
      mood: 'Romantic',
      rating: 5.0,
      reviews: 156,
      description: 'Pair of golden paper cranes'
    },
    {
      id: 3,
      name: 'Sakura Dreams',
      price: 67,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop',
      mood: 'Artistic',
      rating: 4.8,
      reviews: 189,
      description: 'Cherry blossom inspired collection'
    },
    {
      id: 4,
      name: 'Mountain Meditation',
      price: 134,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
      mood: 'Zen',
      rating: 4.9,
      reviews: 298,
      description: 'Geometric mountain landscape'
    }
  ];

  const moo dColors = {
    Calming: 'bg-origami-sky text-blue-800',
    Romantic: 'bg-origami-sakura text-pink-800',
    Artistic: 'bg-origami-sage text-green-800',
    Zen: 'bg-purple-100 text-purple-800'
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
            Featured <span className="text-origami-sage font-medium">Creations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each piece is carefully crafted to bring tranquility and beauty to your space
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="paper-card group hover:scale-105 transition-all duration-300 overflow-hidden">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="bg-white/90 backdrop-blur-sm border-white text-gray-800 hover:bg-white">
                    Quick View
                  </Button>
                </div>

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-origami-sakura" />
                </button>

                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-origami-sakura text-white px-2 py-1 rounded-full text-xs font-medium">
                    Save ${product.originalPrice - product.price}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Mood Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${moodColors[product.mood as keyof typeof moodColors]}`}>
                  {product.mood}
                </span>

                {/* Product Name */}
                <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-origami-sage transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-semibold text-origami-sage">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button size="sm" className="origami-button">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white min-w-[200px]">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
