import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Github, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Dummy login logic with predefined credentials
    const validCredentials = [
      { email: 'user@skillswap.com', password: 'user123', isAdmin: false, name: 'John Doe' },
      { email: 'admin@skillswap.com', password: 'admin123', isAdmin: true, name: 'Admin User' },
      { email: 'emily@skillswap.com', password: 'emily123', isAdmin: false, name: 'Emily Cooper' }
    ];

    const user = validCredentials.find(cred => cred.email === email && cred.password === password);
    
    if (user) {
      // Store user data in localStorage for demo purposes
      localStorage.setItem('user', JSON.stringify({
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      }));
      localStorage.setItem('isLoggedIn', 'true');
      
      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      alert('Invalid credentials! Try:\nUser: user@skillswap.com / user123\nAdmin: admin@skillswap.com / admin123');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding and Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-purple-700 p-12 flex-col justify-between text-white">
        <div className="max-w-lg">
          <div className="text-2xl font-bold mb-12">SkillSwap</div>
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight">
              Unlock a world of knowledge and skills
            </h1>
            <p className="text-indigo-100 text-lg">
              Connect with experts, learn new skills, and share your knowledge with our community of passionate learners.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-1 bg-indigo-400 rounded-full"></div>
              <span className="text-indigo-200">Join thousands of learners</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm text-indigo-200">
          <span> 2023 SkillSwap</span>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up for free
              </Link>
            </p>
          </div>

          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email address
                    </Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <Link to="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </Button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    type="button"
                    className="w-full h-12 border-gray-300 bg-white hover:bg-gray-50"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-gray-700">Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    type="button"
                    className="w-full h-12 border-gray-300 bg-white hover:bg-gray-50"
                  >
                    <Github className="h-5 w-5 text-gray-800" />
                    <span className="ml-2 text-gray-700">GitHub</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-gray-500 mt-4">
            <p>Demo credentials:</p>
            <p className="text-xs mt-1">
              User: user@skillswap.com / user123<br />
              Admin: admin@skillswap.com / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
