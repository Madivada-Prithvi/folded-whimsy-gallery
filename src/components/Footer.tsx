
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-origami-paper to-origami-cream border-t border-origami-fold">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-origami-sage to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-origami-sakura to-origami-sage rounded-lg rotate-45"></div>
              <span className="text-xl font-semibold bg-gradient-to-r from-origami-sage to-origami-sky bg-clip-text text-transparent">
                Folded Whimsy
              </span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Where ancient art meets modern soul. Every fold tells a story, every crease holds meaning.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-origami-sakura fill-current" />
              <span>in Japan</span>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Shop</h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Sale Items', 'Gift Sets', 'Custom Orders'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-origami-sage transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Learn</h3>
            <ul className="space-y-3">
              {['Video Tutorials', 'Fold Guides', 'Certification', 'Blog', 'Cultural Stories'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-origami-sage transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Shipping Info', 'Returns', 'Sustainability'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-origami-sage transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-origami-fold">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Stay in the fold</h3>
            <p className="text-gray-600 mb-4">Get origami tips, new arrivals, and mindful moments delivered to your inbox.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-origami-fold rounded-lg focus:outline-none focus:ring-2 focus:ring-origami-sage focus:border-transparent"
              />
              <Button className="origami-button">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-origami-fold flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4 md:mb-0">
            <span>© 2024 Folded Whimsy. All rights reserved.</span>
            <a href="#" className="hover:text-origami-sage transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-origami-sage transition-colors">Terms of Service</a>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            <span className="ml-2">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
