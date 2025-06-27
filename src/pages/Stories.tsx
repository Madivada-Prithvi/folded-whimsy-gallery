
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Globe, Heart, BookOpen } from 'lucide-react';

const Stories = () => {
  const culturalStories = [
    {
      id: 1,
      title: 'The Legend of the Thousand Cranes',
      origin: 'Japan',
      readTime: '8 min read',
      category: 'Legends',
      excerpt: 'Discover the powerful story behind Senbazuru and how folding 1,000 paper cranes became a symbol of hope and healing.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      content: 'In Japanese culture, the crane is considered a mystical creature that lives for 1,000 years. According to ancient legend, anyone who folds 1,000 paper cranes will be granted a wish by the gods...'
    },
    {
      id: 2,
      title: 'The Lotus: Symbol of Purity and Rebirth',
      origin: 'Buddhist Tradition',
      readTime: '6 min read',
      category: 'Spirituality',
      excerpt: 'Explore how the lotus flower in origami represents the journey from darkness to enlightenment in Buddhist philosophy.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      content: 'The lotus flower holds deep spiritual significance in Buddhism, rising from muddy waters to bloom in pristine beauty...'
    },
    {
      id: 3,
      title: 'Dragons in Chinese Paper Folding',
      origin: 'China',
      readTime: '10 min read',
      category: 'Mythology',
      excerpt: 'Uncover the ancient Chinese art of paper dragons and their role in bringing good fortune and prosperity.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
      content: 'In Chinese mythology, dragons are benevolent creatures that bring good luck, strength, and wisdom...'
    },
    {
      id: 4,
      title: 'The Butterfly Effect: Transformation Stories',
      origin: 'Universal',
      readTime: '5 min read',
      category: 'Philosophy',
      excerpt: 'How the simple act of folding a paper butterfly connects us to universal themes of change and transformation.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop',
      content: 'The butterfly has long been a symbol of transformation, representing the soul\'s journey through life...'
    },
    {
      id: 5,
      title: 'Geometric Patterns in Islamic Art',
      origin: 'Islamic Culture',
      readTime: '12 min read',
      category: 'Sacred Geometry',
      excerpt: 'Discover how Islamic geometric principles influenced modern modular origami and mathematical folding.',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop',
      content: 'Islamic art has always embraced geometric patterns as a way to represent the infinite nature of Allah...'
    },
    {
      id: 6,
      title: 'The Art of Giving: Gift Wrapping Traditions',
      origin: 'Various Cultures',
      readTime: '7 min read',
      category: 'Traditions',
      excerpt: 'Explore how different cultures use origami-inspired folding techniques in their gift-giving ceremonies.',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop',
      content: 'The art of beautiful presentation has been cherished across cultures, with each tradition adding its unique touch...'
    }
  ];

  const categories = ['All', 'Legends', 'Spirituality', 'Mythology', 'Philosophy', 'Sacred Geometry', 'Traditions'];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-origami-cream to-origami-sky/20 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Cultural <span className="text-origami-sage font-medium">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover the rich history, deep meanings, and cultural significance behind every fold. Each origami piece carries centuries of wisdom and tradition.
            </p>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="h-5 w-5" />
                <span className="text-sm">25+ Cultures</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm">150+ Stories</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="h-5 w-5" />
                <span className="text-sm">Ancient Wisdom</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-origami-fold">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center space-x-4 space-y-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className={category === 'All' ? 'origami-button' : 'border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white'}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-medium text-origami-sage mb-2">Featured Story</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-origami-sage to-origami-sky"></div>
            </div>

            <Card className="paper-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={culturalStories[0].image}
                    alt={culturalStories[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {culturalStories[0].category}
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-origami-sage font-medium">{culturalStories[0].origin}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{culturalStories[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
                    {culturalStories[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {culturalStories[0].excerpt}
                  </p>
                  
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {culturalStories[0].content}
                  </p>
                  
                  <Button className="origami-button">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16 bg-origami-sky/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                More <span className="text-origami-sage font-medium">Cultural Tales</span>
              </h2>
              <p className="text-xl text-gray-600">Each story reveals the soul behind the fold</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culturalStories.slice(1).map((story) => (
                <Card key={story.id} className="paper-card overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                      {story.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-sm text-origami-sage font-medium">{story.origin}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{story.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                      {story.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {story.excerpt}
                    </p>

                    <Button variant="outline" size="sm" className="w-full border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white">
                      Read Story
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story of the Month */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <Card className="paper-card p-8 md:p-12 text-center bg-gradient-to-br from-origami-cream to-origami-sky/10">
              <div className="w-16 h-16 bg-gradient-to-br from-origami-sakura to-origami-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
                Story of the <span className="text-origami-sage font-medium">Month</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to receive a beautifully illustrated cultural story delivered to your inbox each month, complete with the origami tutorial to bring the tale to life.
              </p>
              
              <div className="max-w-md mx-auto mb-8">
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-origami-fold rounded-lg focus:outline-none focus:ring-2 focus:ring-origami-sage focus:border-transparent"
                  />
                  <Button className="origami-button">Subscribe</Button>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">
                Join 25,000+ culture enthusiasts • Unsubscribe anytime
              </p>
            </Card>
          </div>
        </section>

        {/* Cultural Timeline */}
        <section className="py-16 bg-origami-sakura/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                <span className="text-origami-sage font-medium">Timeline</span> of Paper Folding
              </h2>
              <p className="text-xl text-gray-600">Journey through the history of origami across cultures</p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-origami-sage to-origami-sakura"></div>

              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right pr-8">
                    <Card className="paper-card p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">105 AD - China</h3>
                      <p className="text-gray-600">Paper is invented by Cai Lun, laying the foundation for all paper arts</p>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-origami-sage rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="w-8 h-8 bg-origami-sky rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-5/12 pl-8">
                    <Card className="paper-card p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">600 AD - Japan</h3>
                      <p className="text-gray-600">Buddhist monks bring paper folding techniques to Japan via Korea</p>
                    </Card>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right pr-8">
                    <Card className="paper-card p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">1600s - Europe</h3>
                      <p className="text-gray-600">Paper folding spreads to Europe, influencing geometric art and design</p>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-origami-sakura rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="w-8 h-8 bg-origami-sage rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-5/12 pl-8">
                    <Card className="paper-card p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Present Day</h3>
                      <p className="text-gray-600">Modern origami combines ancient wisdom with contemporary innovation</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;
