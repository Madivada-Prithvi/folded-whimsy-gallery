
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Gift, Truck, Users, Calendar, Star, Heart, Sparkles } from 'lucide-react';

const Subscription = () => {
  const plans = [
    {
      name: 'Beginner',
      price: 19,
      originalPrice: 29,
      description: 'Perfect for starting your origami journey',
      popular: false,
      features: [
        '3 Premium Paper Sheets',
        '1 Video Tutorial',
        'Digital Folding Guide',
        'Monthly Cultural Story',
        'Community Access',
        'Email Support'
      ],
      extras: [
        'Beginner-friendly projects',
        'Basic techniques focus',
        'Quality origami paper'
      ]
    },
    {
      name: 'Artist',
      price: 39,
      originalPrice: 59,
      description: 'For passionate creators ready to grow',
      popular: true,
      features: [
        '8 Premium Paper Sheets',
        '3 Video Tutorials',
        'Exclusive Pattern Designs',
        'Live Workshop Access',
        'Community Challenges',
        'Priority Support'
      ],
      extras: [
        'Intermediate to advanced projects',
        'Special edition papers',
        'Monthly artist spotlight'
      ]
    },
    {
      name: 'Master',
      price: 69,
      originalPrice: 99,
      description: 'For dedicated artists seeking mastery',
      popular: false,
      features: [
        '15 Premium Paper Sheets',
        '5+ Video Tutorials',
        '1-on-1 Virtual Sessions',
        'Early Access to New Designs',
        'Exclusive Master Classes',
        'Personal Origami Mentor'
      ],
      extras: [
        'Complex and artistic projects',
        'Rare and luxury papers',
        'Direct access to master artists'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      plan: 'Artist',
      rating: 5,
      comment: 'The monthly boxes have transformed my origami skills. The quality of paper and instruction is exceptional!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'David Park',
      plan: 'Master',
      rating: 5,
      comment: 'Having a personal mentor has accelerated my learning beyond what I thought possible. Worth every penny!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Maria Rodriguez',
      plan: 'Beginner',
      rating: 5,
      comment: 'Perfect introduction to origami. My 8-year-old daughter and I look forward to each month\'s project!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    }
  ];

  const whatsIncluded = [
    {
      icon: Gift,
      title: 'Curated Projects',
      description: 'Hand-selected designs that match your skill level and interests'
    },
    {
      icon: Sparkles,
      title: 'Premium Materials',
      description: 'High-quality origami paper in beautiful colors and patterns'
    },
    {
      icon: Calendar,
      title: 'Cultural Stories',
      description: 'Learn the history and meaning behind each origami piece'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Connect with fellow origami enthusiasts worldwide'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-origami-cream to-origami-sakura/10 py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-origami-fold">
              <Gift className="h-4 w-4 text-origami-sage mr-2" />
              <span className="text-sm font-medium text-gray-700">Limited Time: 30% Off First Box</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Origami <span className="text-origami-sage font-medium">of the Month</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover new projects, master ancient techniques, and connect with culture through our carefully curated monthly origami boxes
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Truck className="h-5 w-5 text-origami-sage" />
                <span>Free Worldwide Shipping</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Heart className="h-5 w-5 text-origami-sakura" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Star className="h-5 w-5 text-origami-sky" />
                <span>4.9★ Customer Rating</span>
              </div>
            </div>

            <Button size="lg" className="origami-button">
              Choose Your Plan
            </Button>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                What's <span className="text-origami-sage font-medium">Included</span>
              </h2>
              <p className="text-xl text-gray-600">Every box is a journey of discovery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatsIncluded.map((item, index) => (
                <Card key={index} className="paper-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-origami-sakura/20 to-origami-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-origami-sage" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-origami-sky/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Choose Your <span className="text-origami-sage font-medium">Journey</span>
              </h2>
              <p className="text-xl text-gray-600">Select the plan that matches your origami aspirations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className={`paper-card relative overflow-hidden ${
                  plan.popular ? 'ring-2 ring-origami-sage scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-origami-sage to-origami-sky text-white text-center py-2 text-sm font-medium">
                      Most Popular Choice
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-4xl font-bold text-origami-sage">${plan.price}</span>
                        <span className="text-gray-500">/month</span>
                      </div>
                      
                      {plan.originalPrice && (
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-lg text-gray-400 line-through">${plan.originalPrice}</span>
                          <span className="bg-origami-sakura text-white px-2 py-1 rounded-full text-xs font-medium">
                            Save ${plan.originalPrice - plan.price}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-origami-sage rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Extras */}
                    <div className="border-t border-origami-fold pt-6 mb-8">
                      <h4 className="text-sm font-medium text-gray-800 mb-3">What makes this special:</h4>
                      <ul className="space-y-2">
                        {plan.extras.map((extra, extraIndex) => (
                          <li key={extraIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="text-origami-sage mr-2">•</span>
                            {extra}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full ${plan.popular ? 'origami-button' : 'border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white'}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Start {plan.name} Plan
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Money Back Guarantee */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-origami-fold">
                <div className="w-8 h-8 bg-origami-sage rounded-full flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                What Our <span className="text-origami-sage font-medium">Subscribers</span> Say
              </h2>
              <p className="text-xl text-gray-600">Join thousands of happy origami enthusiasts</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="paper-card p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-origami-sage">{testimonial.plan} Subscriber</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-origami-sakura/5">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Frequently <span className="text-origami-sage font-medium">Asked Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="paper-card p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I skip a month or cancel anytime?</h3>
                <p className="text-gray-600">Yes! You have complete control over your subscription. Skip months, pause, or cancel anytime through your account dashboard.</p>
              </Card>
              
              <Card className="paper-card p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What if I'm a complete beginner?</h3>
                <p className="text-gray-600">Our Beginner plan is designed specifically for newcomers. Each project includes detailed video tutorials and step-by-step guides.</p>
              </Card>
              
              <Card className="paper-card p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">Yes! We offer free worldwide shipping on all subscription plans. International orders typically arrive within 7-14 business days.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Start Your <span className="text-origami-sage font-medium">Journey?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community of creators and receive your first origami box within days. Cancel anytime, satisfaction guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="origami-button min-w-[200px]">
                Start My Subscription
              </Button>
              <Button variant="outline" size="lg" className="border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white min-w-[200px]">
                Gift a Subscription
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Subscription;
