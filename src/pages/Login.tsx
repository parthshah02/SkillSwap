
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Github } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dummy login logic with predefined credentials
    const validCredentials = [
      { email: 'user@skillswap.com', password: 'user123', isAdmin: false, name: 'John Doe' },
      { email: 'admin@skillswap.com', password: 'admin123', isAdmin: true, name: 'Admin User' },
      { email: 'emily@skillswap.com', password: 'emily123', isAdmin: false, name: 'Emily Cooper' }
    ];

    const user = validCredentials.find(cred => cred.email === email && cred.password === password);
    
    if (user) {
      console.log('Login successful:', user);
      
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
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Illustration */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="w-64 h-64 mx-auto mb-8 bg-white rounded-3xl shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">👋</span>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-2 bg-blue-200 rounded mx-auto"></div>
                <div className="w-12 h-2 bg-blue-300 rounded mx-auto"></div>
                <div className="w-20 h-2 bg-blue-200 rounded mx-auto"></div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Share your skills,<br />
            learn new ones
          </h1>
          <p className="text-gray-600">
            Online platform for new knowledge and skills
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-96 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="text-right mb-8">
            <Button variant="ghost" size="sm" className="text-gray-600">
              Light
            </Button>
          </div>

          <Card className="border-0 shadow-none">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-semibold">Login</CardTitle>
              <CardDescription className="text-xs text-gray-500 mt-2">
                Demo Credentials:<br />
                User: user@skillswap.com / user123<br />
                Admin: admin@skillswap.com / admin123
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                    placeholder="Try user@skillswap.com or admin@skillswap.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12"
                    placeholder="user123 or admin123"
                    required
                  />
                  <div className="text-right">
                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700">
                  Login
                </Button>
              </form>

              <div className="text-center">
                <span className="text-sm text-gray-500">OR</span>
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full h-12 bg-blue-600 text-white hover:bg-blue-700">
                  <Facebook className="mr-2 h-4 w-4" />
                  Continue with Facebook
                </Button>
                <Button variant="outline" className="w-full h-12 bg-black text-white hover:bg-gray-800">
                  <Github className="mr-2 h-4 w-4" />
                  Continue with Github
                </Button>
              </div>

              <div className="text-center pt-4">
                <span className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-blue-600 hover:underline">
                    Sign up
                  </Link>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
