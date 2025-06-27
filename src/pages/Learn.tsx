
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, BookOpen, Award, Clock, Users, Star, ChevronRight } from 'lucide-react';

const Learn = () => {
  const skillLevels = [
    { name: 'Beginner', count: 45, color: 'bg-green-100 text-green-800' },
    { name: 'Intermediate', count: 38, color: 'bg-blue-100 text-blue-800' },
    { name: 'Advanced', count: 27, color: 'bg-purple-100 text-purple-800' },
    { name: 'Master', count: 15, color: 'bg-red-100 text-red-800' }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'The Art of Paper Cranes',
      instructor: 'Master Takeshi',
      duration: '2.5 hours',
      students: 12540,
      rating: 4.9,
      level: 'Beginner',
      price: 49,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      description: 'Learn the traditional technique of folding perfect paper cranes, including cultural significance and meditation practices.'
    },
    {
      id: 2,
      title: 'Floral Origami Garden',
      instructor: 'Sensei Yuki',
      duration: '4 hours',
      students: 8920,
      rating: 4.8,
      level: 'Intermediate',
      price: 89,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      description: 'Create stunning paper flowers including roses, lilies, and cherry blossoms with advanced folding techniques.'
    },
    {
      id: 3,
      title: 'Geometric Masterpieces',
      instructor: 'Professor Lin',
      duration: '6 hours',
      students: 5670,
      rating: 4.9,
      level: 'Advanced',
      price: 129,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
      description: 'Master complex geometric patterns and modular origami with mathematical precision and artistic flair.'
    }
  ];

  const quickTutorials = [
    {
      title: 'Simple Butterfly',
      duration: '5 min',
      difficulty: 'Easy',
      thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=200&h=150&fit=crop'
    },
    {
      title: 'Lucky Star',
      duration: '3 min',
      difficulty: 'Easy',
      thumbnail: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=200&h=150&fit=crop'
    },
    {
      title: 'Paper Rose',
      duration: '12 min',
      difficulty: 'Medium',
      thumbnail: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=200&h=150&fit=crop'
    },
    {
      title: 'Dragon Model',
      duration: '25 min',
      difficulty: 'Hard',
      thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=150&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-origami-cream to-origami-sage/10 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-light mb-6">
                  Master the <span className="text-origami-sage font-medium">Art of Folding</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From ancient traditions to modern innovations, learn origami with our comprehensive courses, expert instructors, and supportive community.
                </p>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  <Button size="lg" className="origami-button">
                    <Play className="mr-2 h-5 w-5" />
                    Start Learning Now
                  </Button>
                  <Button variant="outline" size="lg" className="border-origami-sage text-origami-sage hover:bg-origami-sage hover:text-white">
                    Browse Courses
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-origami-sage mb-1">500+</div>
                    <div className="text-sm text-gray-600">Video Tutorials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-origami-sky mb-1">50K+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-origami-sakura mb-1">4.9★</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop"
                  alt="Learning Origami"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 paper-card p-4">
                  <div className="flex items-center space-x-2">
                    <Play className="h-4 w-4 text-origami-sage" />
                    <span className="text-sm font-medium">Watch Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Levels */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Choose Your <span className="text-origami-sage font-medium">Skill Level</span>
              </h2>
              <p className="text-xl text-gray-600">Start where you are, grow at your own pace</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillLevels.map((level) => (
                <Card key={level.name} className="paper-card p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${level.color}`}>
                    {level.name}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{level.count} Courses</h3>
                  <p className="text-gray-600 text-sm mb-4">Perfect for your current skill level</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Explore {level.name}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 bg-origami-sky/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4">
                Featured <span className="text-origami-sage font-medium">Courses</span>
              </h2>
              <p className="text-xl text-gray-600">Hand-picked courses from master instructors</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <Card key={course.id} className="paper-card overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                      {course.level}
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" className="bg-white/90 backdrop-blur-sm">
                        <Play className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(course.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{course.rating}</span>
                      </div>
                      <span className="text-lg font-semibold text-origami-sage">${course.price}</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>

                    <Button className="w-full origami-button">
                      Enroll Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tutorials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-4">
                  Quick <span className="text-origami-sage font-medium">Tutorials</span>
                </h2>
                <p className="text-xl text-gray-600">Perfect for a coffee break</p>
              </div>
              <Button variant="outline" className="hidden md:flex">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickTutorials.map((tutorial, index) => (
                <Card key={index} className="paper-card hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="relative">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-origami-sage ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                      {tutorial.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-2">{tutorial.title}</h3>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs ${
                      tutorial.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      tutorial.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tutorial.difficulty}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Program */}
        <section className="py-16 bg-gradient-to-r from-origami-sage/10 to-origami-sky/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Award className="h-16 w-16 text-origami-sage mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Get <span className="text-origami-sage font-medium">Certified</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Earn official recognition for your origami skills with our comprehensive certification program
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-origami-sage mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Structured Learning</h3>
                <p className="text-sm text-gray-600">Follow our proven curriculum</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-origami-sage mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Expert Mentorship</h3>
                <p className="text-sm text-gray-600">Learn from certified masters</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-origami-sage mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Official Certificate</h3>
                <p className="text-sm text-gray-600">Recognized worldwide</p>
              </div>
            </div>

            <Button size="lg" className="origami-button">
              Start Certification Program
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;
