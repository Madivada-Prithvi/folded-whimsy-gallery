
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, MessageCircle, Share2, Award, Users, Calendar, Camera, Zap } from 'lucide-react';

const Community = () => {
  const challenges = [
    {
      id: 1,
      title: 'Cherry Blossom Challenge',
      description: 'Create your interpretation of sakura using pink paper',
      participants: 1250,
      timeLeft: '5 days',
      difficulty: 'Intermediate',
      prize: '$200 Amazon Gift Card',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Geometric Patterns',
      description: 'Explore mathematical beauty in paper folding',
      participants: 890,
      timeLeft: '12 days',
      difficulty: 'Advanced',
      prize: 'Featured Artist Spotlight',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Miniature Marvels',
      description: 'Create stunning origami using paper smaller than 3 inches',
      participants: 567,
      timeLeft: '8 days',
      difficulty: 'Expert',
      prize: 'Premium Paper Kit',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=300&h=200&fit=crop'
    }
  ];

  const communityPosts = [
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=50&h=50&fit=crop&crop=face',
      time: '2 hours ago',
      content: 'Just finished my first modular origami piece! 30 units later and I\'m exhausted but so proud 🎉',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      likes: 245,
      comments: 18,
      shares: 12
    },
    {
      id: 2,
      author: 'Kenji Nakamura',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      time: '4 hours ago',
      content: 'Teaching my 5-year-old daughter how to fold cranes. Her concentration is amazing! 👧✨',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      likes: 189,
      comments: 24,
      shares: 8
    },
    {
      id: 3,
      author: 'Maria Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      time: '6 hours ago',
      content: 'Experimenting with recycled magazine pages for origami. The colors create such beautiful patterns!',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop',
      likes: 156,
      comments: 31,
      shares: 15
    }
  ];

  const featuredArtists = [
    {
      name: 'Master Takeshi',
      specialty: 'Traditional Cranes',
      followers: '12.5K',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'Elena Vasquez',
      specialty: 'Floral Designs',
      followers: '8.9K',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=80&h=80&fit=crop&crop=face',
      verified: true
    },
    {
      name: 'David Park',
      specialty: 'Modern Geometric',
      followers: '15.2K',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-origami-cream to-origami-sakura/10 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Join Our <span className="text-origami-sage font-medium">Creative Community</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with fellow artists, share your creations, participate in challenges, and get inspired by the global origami community
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button size="lg" className="origami-button">
                <Camera className="mr-2 h-5 w-5" />
                Share Your Art
              </Button>
              <Button variant="outline" size="lg" className="border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white">
                Join a Challenge
              </Button>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-semibold text-origami-sage mb-1">50K+</div>
                <div className="text-sm text-gray-600">Artists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-origami-sky mb-1">120K+</div>
                <div className="text-sm text-gray-600">Creations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-origami-sakura mb-1">25+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Challenges */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                  Active <span className="text-origami-sage font-medium">Challenges</span>
                </h2>
                <p className="text-xl text-gray-600">Push your creativity and win amazing prizes</p>
              </div>
              <Button variant="outline" className="hidden md:flex">
                View All Challenges
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className="paper-card overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {challenge.difficulty}
                    </div>
                    <div className="absolute top-4 right-4 bg-origami-sakura text-white px-3 py-1 rounded-full text-sm font-medium">
                      {challenge.timeLeft} left
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{challenge.title}</h3>
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{challenge.participants} joined</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-origami-sage" />
                        <span className="text-sm font-medium text-origami-sage">{challenge.prize}</span>
                      </div>
                    </div>

                    <Button className="w-full origami-button">
                      <Zap className="mr-2 h-4 w-4" />
                      Join Challenge
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Feed */}
        <section className="py-16 bg-origami-sky/5">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
              Community <span className="text-origami-sage font-medium">Showcase</span>
            </h2>

            <div className="space-y-8">
              {communityPosts.map((post) => (
                <Card key={post.id} className="paper-card p-6">
                  {/* Post Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{post.author}</h3>
                      <p className="text-sm text-gray-600">{post.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Follow
                    </Button>
                  </div>

                  {/* Post Content */}
                  <p className="text-gray-700 mb-4">{post.content}</p>

                  {/* Post Image */}
                  <img
                    src={post.image}
                    alt="Community post"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-origami-fold">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-origami-sakura transition-colors">
                        <Heart className="h-5 w-5" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-origami-sage transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-origami-sky transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span className="text-sm">{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Artists */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Featured <span className="text-origami-sage font-medium">Artists</span>
              </h2>
              <p className="text-xl text-gray-600">Discover talented creators from around the world</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArtists.map((artist, index) => (
                <Card key={index} className="paper-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="relative inline-block mb-4">
                    <img
                      src={artist.avatar}
                      alt={artist.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto"
                    />
                    {artist.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-origami-sage rounded-full flex items-center justify-center">
                        <Award className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{artist.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{artist.specialty}</p>
                  <p className="text-sm text-origami-sage font-medium mb-4">{artist.followers} followers</p>
                  <Button size="sm" className="origami-button">
                    Follow Artist
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-origami-sage/10 to-origami-sakura/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to <span className="text-origami-sage font-medium">Share Your Art?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of artists sharing their origami journey. Get feedback, inspiration, and recognition for your creations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="origami-button">
                <Camera className="mr-2 h-5 w-5" />
                Upload Your First Post
              </Button>
              <Button variant="outline" size="lg" className="border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white">
                <Calendar className="mr-2 h-5 w-5" />
                Join Weekly Challenge
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
