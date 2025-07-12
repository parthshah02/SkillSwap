
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ArrowRight, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Star,
  CheckCircle,
  Zap,
  Globe,
  Heart,
  Play,
  Shield,
  Award,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: Users,
      title: 'Connect Globally',
      description: 'Find skilled individuals from around the world ready to share their expertise.',
    },
    {
      icon: BookOpen,
      title: 'Learn & Teach',
      description: 'Exchange knowledge in a mutually beneficial learning environment.',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified profiles and secure communication for peace of mind.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Rating system ensures high-quality exchanges and trusted connections.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'UX Designer',
      avatar: '/placeholder.svg',
      content: 'SkillSwap transformed how I learn. I taught design and learned coding - incredible experience!',
      rating: 5,
    },
    {
      name: 'Mike Johnson',
      role: 'Developer',
      avatar: '/placeholder.svg',
      content: 'The platform is intuitive and the community is amazing. Found my perfect learning partner.',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Lead',
      avatar: '/placeholder.svg',
      content: 'Love how easy it is to connect with experts. The skill exchange concept is brilliant.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '1,200+', label: 'Skills Shared' },
    { number: '100K+', label: 'Successful Swaps' },
    { number: '4.9/5', label: 'User Rating' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">SkillSwap</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">Reviews</a>
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                <Link to="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
                🚀 Join 50,000+ skill swappers worldwide
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Share Skills,
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Transform Lives
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Connect with talented individuals worldwide. Exchange knowledge, build relationships, and grow together in our thriving community.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-10 py-6 h-auto" asChild>
                  <Link to="/login">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 h-auto border-2">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                      <span className="font-semibold">SkillSwap Dashboard</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Live</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-100 rounded-lg h-20"></div>
                    <div className="bg-blue-100 rounded-lg h-20"></div>
                    <div className="bg-purple-100 rounded-lg h-20"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-gray-200 rounded-full h-3 flex-1"></div>
                    <div className="bg-gray-200 rounded-full h-3 w-20"></div>
                    <div className="bg-gray-200 rounded-full h-3 w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge className="mb-6 bg-purple-100 text-purple-700">Features</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Everything you need to
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                exchange skills
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our platform provides all the tools you need for meaningful skill exchanges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge className="mb-6 bg-blue-100 text-blue-700">Process</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How SkillSwap
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Start exchanging skills in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-8 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Create Profile</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sign up and showcase your skills. Tell the community what you can teach and what you'd like to learn.
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 -translate-y-1/2"></div>
            </div>
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-8 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Find Matches</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Browse through profiles and discover people who offer what you need and want what you have.
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-blue-200 -translate-y-1/2"></div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-8 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Start Learning</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Connect, schedule sessions, and begin your skill exchange journey with like-minded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Badge className="mb-6 bg-white text-gray-700">Testimonials</Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Loved by
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                thousands
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Join our community of successful skill swappers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{testimonial.content}"
                  </CardDescription>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-blue-100 to-purple-100">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to start your
              <span className="block">learning journey?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
              Join thousands of learners and teachers sharing knowledge worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6 h-auto font-semibold" asChild>
                <Link to="/login">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-6 h-auto">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SS</span>
                </div>
                <span className="text-2xl font-bold">SkillSwap</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Connecting learners and teachers worldwide through meaningful skill exchange.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer">
                  <Heart className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Skills</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Teach Skills</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 SkillSwap. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
