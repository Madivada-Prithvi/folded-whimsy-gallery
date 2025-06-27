
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Star, Filter, Search, Grid, List, ShoppingCart } from 'lucide-react';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMood, setSelectedMood] = useState('all');

  const categories = ['all', 'cranes', 'flowers', 'animals', 'geometric', 'seasonal'];
  const moods = ['all', 'calming', 'romantic', 'artistic', 'zen', 'playful'];

  const products = [
    {
      id: 1,
      name: 'Serenity Garden Set',
      price: 89,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop',
      category: 'flowers',
      mood: 'calming',
      rating: 4.9,
      reviews: 234,
      description: 'Handfolded lotus and lily collection that brings tranquil energy to any space',
      inStock: true
    },
    {
      id: 2,
      name: 'Romantic Cranes',
      price: 156,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop',
      category: 'cranes',
      mood: 'romantic',
      rating: 5.0,
      reviews: 156,
      description: 'Pair of golden paper cranes symbolizing eternal love and commitment',
      inStock: true
    },
    {
      id: 3,
      name: 'Sakura Dreams',
      price: 67,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=400&fit=crop',
      category: 'seasonal',
      mood: 'artistic',
      rating: 4.8,
      reviews: 189,
      description: 'Cherry blossom inspired collection perfect for spring celebrations',
      inStock: true
    },
    {
      id: 4,
      name: 'Mountain Meditation',
      price: 134,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
      category: 'geometric',
      mood: 'zen',
      rating: 4.9,
      reviews: 298,
      description: 'Geometric mountain landscape promoting mindfulness and inner peace',
      inStock: false
    },
    {
      id: 5,
      name: 'Playful Forest Animals',
      price: 45,
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=400&fit=crop',
      category: 'animals',
      mood: 'playful',
      rating: 4.7,
      reviews: 145,
      description: 'Adorable woodland creatures perfect for children and nature lovers',
      inStock: true
    },
    {
      id: 6,
      name: 'Zen Garden Stones',
      price: 78,
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=400&fit=crop',
      category: 'geometric',
      mood: 'zen',
      rating: 4.6,
      reviews: 203,
      description: 'Minimalist stone-inspired origami for meditation spaces',
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const moodMatch = selectedMood === 'all' || product.mood === selectedMood;
    return categoryMatch && moodMatch;
  });

  const moodColors = {
    calming: 'bg-origami-sky text-blue-800',
    romantic: 'bg-origami-sakura text-pink-800',
    artistic: 'bg-origami-sage text-green-800',
    zen: 'bg-purple-100 text-purple-800',
    playful: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-origami-cream to-origami-sky/20 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-4">
              <span className="text-gray-800">Our</span>
              <span className="block bg-gradient-to-r from-origami-sage to-origami-sakura bg-clip-text text-transparent font-medium">
                Origami Collection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover handcrafted paper art that transforms spaces and touches souls
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for origami art..."
                className="w-full pl-10 pr-4 py-3 border border-origami-fold rounded-lg focus:outline-none focus:ring-2 focus:ring-origami-sage focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 border-b border-origami-fold">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Filters */}
              <div className="flex flex-wrap items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Filters:</span>
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-1 border border-origami-fold rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-origami-sage"
                >
                  <option value="all">All Categories</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedMood}
                  onChange={(e) => setSelectedMood(e.target.value)}
                  className="px-3 py-1 border border-origami-fold rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-origami-sage"
                >
                  <option value="all">All Moods</option>
                  {moods.slice(1).map(mood => (
                    <option key={mood} value={mood}>
                      {mood.charAt(0).toUpperCase() + mood.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Controls */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{filteredProducts.length} products</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredProducts.map((product) => (
                <Card key={product.id} className={`paper-card group hover:scale-105 transition-all duration-300 overflow-hidden ${
                  viewMode === 'list' ? 'flex flex-row' : ''
                }`}>
                  {/* Image Container */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 flex-shrink-0' : ''
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                        viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                      }`}
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

                    {/* Stock Status */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                        <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    {/* Mood Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      moodColors[product.mood as keyof typeof moodColors]
                    }`}>
                      {product.mood.charAt(0).toUpperCase() + product.mood.slice(1)}
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
                      <Link to="/cart">
                        <Button 
                          size="sm" 
                          className="origami-button group"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          {product.inStock ? 'Add to Cart' : 'Notify Me'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
