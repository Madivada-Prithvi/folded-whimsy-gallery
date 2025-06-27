
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-origami-sakura/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-origami-sky/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-origami-sage/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Origami Birds */}
        <div className="absolute top-32 right-1/4 w-24 h-24 opacity-10">
          <div className="crane-silhouette w-full h-full bg-origami-sage animate-float"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-10">
          <div className="crane-silhouette w-full h-full bg-origami-sakura animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-origami-fold">
          <Star className="h-4 w-4 text-origami-sage" />
          <span className="text-sm font-medium text-gray-700">Handcrafted with Love</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
          <span className="block text-gray-800">Where Paper</span>
          <span className="block bg-gradient-to-r from-origami-sage via-origami-sky to-origami-sakura bg-clip-text text-transparent font-medium">
            Becomes Poetry
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
          Discover the ancient art of origami reimagined for modern souls. Each fold tells a story, each crease holds meaning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link to="/shop">
            <Button size="lg" className="origami-button group min-w-[200px]">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/stories">
            <Button variant="outline" size="lg" className="min-w-[200px] border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white">
              Discover Stories
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-semibold text-origami-sage mb-1">1000+</div>
            <div className="text-sm text-gray-600">Unique Designs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-origami-sky mb-1">50K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-origami-sakura mb-1">25+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-origami-sage rounded-full flex justify-center">
          <div className="w-1 h-3 bg-origami-sage rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
