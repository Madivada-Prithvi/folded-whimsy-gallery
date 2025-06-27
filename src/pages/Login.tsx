
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye, EyeOff, ArrowLeft, Sparkles, IndianRupee } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in real app would connect to backend
    console.log(isLogin ? 'Logging in...' : 'Signing up...', { email, password, name });
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-origami-cream via-origami-sky/10 to-origami-sakura/10 flex items-center justify-center p-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-origami-sakura/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-origami-sage/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-origami-sky/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Origami Birds */}
        <div className="absolute top-20 right-1/3 w-16 h-16 opacity-5">
          <div className="crane-silhouette w-full h-full bg-origami-sage animate-float"></div>
        </div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 opacity-5">
          <div className="crane-silhouette w-full h-full bg-origami-sakura animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="paper-card p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-origami-sakura to-origami-sage rounded-lg rotate-45 transform"></div>
              <span className="text-2xl font-semibold bg-gradient-to-r from-origami-sage to-origami-sky bg-clip-text text-transparent">
                Folded Whimsy
              </span>
            </div>
            <h1 className="text-2xl font-light text-gray-800 mb-2">
              {isLogin ? 'Welcome Back' : 'Join Our Community'}
            </h1>
            <p className="text-gray-600 flex items-center justify-center gap-1">
              {isLogin ? 'Fold your way back into creativity' : 'Begin your origami journey'}
              <IndianRupee className="h-4 w-4 text-origami-sage" />
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-origami-fold rounded-lg focus:outline-none focus:ring-2 focus:ring-origami-sage focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-origami-fold rounded-lg focus:outline-none focus:ring-2 focus:ring-origami-sage focus:border-transparent transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-origami-fold rounded-lg focus:outline-none focus:ring-2 focus:ring-origami-sage focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-origami-fold" />
                  Remember me
                </label>
                <Link to="#" className="text-origami-sage hover:text-origami-sage/80">
                  Forgot password?
                </Link>
              </div>
            )}

            <Button type="submit" className="w-full origami-button group">
              {isLogin ? 'Sign In' : 'Create Account'}
              <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-origami-sage hover:text-origami-sage/80 font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-origami-fold"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
