
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, ArrowRight, Users, BookOpen, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <FeaturedProducts />
        
        {/* Learning Platform Preview */}
        <section className="py-20 bg-gradient-to-br from-origami-sky/10 to-origami-sakura/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
                  Master the <span className="text-origami-sage font-medium">Ancient Art</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From beginner basics to advanced techniques, our comprehensive learning platform guides you through every fold with patience and precision.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-semibold text-origami-sage mb-2">500+</div>
                    <div className="text-sm text-gray-600">Video Tutorials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-semibold text-origami-sky mb-2">50+</div>
                    <div className="text-sm text-gray-600">Skill Levels</div>
                  </div>
                </div>
                
                <Button size="lg" className="origami-button group">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop"
                  alt="Learning Origami"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 paper-card p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">from 10,000+ students</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
                Join Our <span className="text-origami-sage font-medium">Community</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with fellow artists, share your creations, and find inspiration in our global community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="paper-card p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-origami-sakura to-origami-sky rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Artist Showcase</h3>
                <p className="text-gray-600 mb-6">Feature your work and get discovered by art lovers worldwide</p>
                <Button variant="outline" className="border-origami-sakura text-origami-sakura hover:bg-origami-sakura hover:text-white">
                  Share Your Art
                </Button>
              </Card>

              <Card className="paper-card p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-origami-sage to-origami-sky rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Daily Challenges</h3>
                <p className="text-gray-600 mb-6">Improve your skills with guided daily folding challenges</p>
                <Button variant="outline" className="border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white">
                  Take Challenge
                </Button>
              </Card>

              <Card className="paper-card p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-origami-sky to-origami-sakura rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cultural Stories</h3>
                <p className="text-gray-600 mb-6">Discover the rich history and meaning behind each fold</p>
                <Button variant="outline" className="border-origami-sky text-origami-sky hover:bg-origami-sky hover:text-white">
                  Explore Stories
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Subscription Preview */}
        <section className="py-20 bg-gradient-to-r from-origami-sage/10 via-origami-sky/10 to-origami-sakura/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
              Origami <span className="text-origami-sage font-medium">of the Month</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Receive curated origami kits, exclusive tutorials, and mindful moments delivered to your door every month
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="paper-card p-6">
                <div className="text-2xl font-semibold text-origami-sage mb-2">Beginner</div>
                <div className="text-3xl font-bold mb-4">$19/mo</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>3 Premium Papers</li>
                  <li>1 Video Tutorial</li>
                  <li>Digital Guide</li>
                </ul>
              </Card>

              <Card className="paper-card p-6 ring-2 ring-origami-sage scale-105">
                <div className="text-2xl font-semibold text-origami-sage mb-2">Artist</div>
                <div className="text-3xl font-bold mb-4">$39/mo</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>8 Premium Papers</li>
                  <li>3 Video Tutorials</li>
                  <li>Exclusive Designs</li>
                  <li>Community Access</li>
                </ul>
              </Card>

              <Card className="paper-card p-6">
                <div className="text-2xl font-semibold text-origami-sage mb-2">Master</div>
                <div className="text-3xl font-bold mb-4">$69/mo</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>15 Premium Papers</li>
                  <li>5 Video Tutorials</li>
                  <li>1-on-1 Sessions</li>
                  <li>Early Access</li>
                </ul>
              </Card>
            </div>

            <Button size="lg" className="origami-button min-w-[200px]">
              Start Your Journey
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
