
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Github } from 'lucide-react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Dummy registration logic
    console.log('Registration attempt:', { name, email, password });
    
    // Store user data in localStorage for demo purposes
    const userData = {
      name,
      email,
      isAdmin: email === 'admin@skillswap.com'
    };
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    
    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Illustration */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="w-64 h-64 mx-auto mb-8 bg-white rounded-3xl shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-2 bg-green-200 rounded mx-auto"></div>
                <div className="w-12 h-2 bg-green-300 rounded mx-auto"></div>
                <div className="w-20 h-2 bg-green-200 rounded mx-auto"></div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Join our community,<br />
            start learning today
          </h1>
          <p className="text-gray-600">
            Connect with experts and share your knowledge
          </p>
        </div>
      </div>

      {/* Right side - Register Form */}
      <div className="w-96 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="text-right mb-8">
            <Button variant="ghost" size="sm" className="text-gray-600">
              Light
            </Button>
          </div>

          <Card className="border-0 shadow-none">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-semibold">Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                    placeholder="Try admin@skillswap.com for admin access"
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
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700">
                  Create Account
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
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Sign in
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

export default Register;
