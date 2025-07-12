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
  Target,
  Search,
  Code,
  Palette,
  Languages,
  Music,
  Camera,
  Lightbulb,
  BarChart2,
  Clock,
  Phone,
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: Users,
      title: 'Global Network',
      description: 'Connect with skilled individuals from around the world ready to share their expertise.',
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: BookOpen,
      title: 'Learn & Teach',
      description: 'Exchange knowledge in a mutually beneficial learning environment.',
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Verified profiles and secure communication for peace of mind.',
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Rating system ensures high-quality exchanges and trusted connections.',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
  ];

  const popularSkills = [
    { name: 'Web Development', icon: Code, color: 'bg-blue-100 text-blue-600' },
    { name: 'UI/UX Design', icon: Palette, color: 'bg-purple-100 text-purple-600' },
    { name: 'Language Exchange', icon: Languages, color: 'bg-green-100 text-green-600' },
    { name: 'Music Lessons', icon: Music, color: 'bg-red-100 text-red-600' },
    { name: 'Photography', icon: Camera, color: 'bg-amber-100 text-amber-600' },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'UX Designer',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'SkillSwap transformed how I learn. I taught design and learned coding - incredible experience!',
      rating: 5,
    },
    {
      name: 'Mike Johnson',
      role: 'Developer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'The platform is intuitive and the community is amazing. Found my perfect learning partner.',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Lead',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                SkillSwap
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Testimonials</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Skills</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:inline-flex" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium bg-blue-50 text-blue-600 border-blue-200">
            Join 50,000+ learners worldwide
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Learn in-demand skills by
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> teaching what you know</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with a global community of learners and experts. Share your skills, learn new ones, and grow together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              asChild
            >
              <Link to="/register">Start Learning for Free</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-lg border-gray-300 hover:bg-gray-50"
              asChild
            >
              <Link to="/explore">
                <Play className="w-5 h-5 mr-2 text-blue-600" />
                Watch Demo
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <div className="bg-gray-50 py-8 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {['Google', 'Microsoft', 'Spotify', 'Airbnb', 'Netflix'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">{company}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to learn and grow
            </h2>
            <p className="text-xl text-gray-600">
              Our platform provides all the tools you need to connect, learn, and share knowledge with others.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How SkillSwap Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in just a few simple steps and begin your learning journey today.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Create Your Profile',
                description: 'Sign up and list the skills you can teach and what you want to learn.'
              },
              {
                step: '2',
                title: 'Find Your Match',
                description: 'Connect with people who want to learn what you know and vice versa.'
              },
              {
                step: '3',
                title: 'Start Learning & Teaching',
                description: 'Schedule sessions, share knowledge, and grow together.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Skills Section */}
      <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Skills to Learn
            </h2>
            <p className="text-xl text-gray-600">
              Discover and learn from thousands of skills shared by our community.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularSkills.map((skill, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg flex flex-col items-center justify-center text-center hover:shadow-md transition-all cursor-pointer ${skill.color.replace('text-', 'bg-opacity-20 hover:bg-opacity-30 ')}`}
              >
                <skill.icon className={`w-8 h-8 mb-2 ${skill.color}`} />
                <span className="font-medium text-gray-800">{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="border-gray-300" asChild>
              <Link to="/explore">
                Explore All Skills <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users who have transformed their learning journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your learning journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of learners and experts sharing knowledge and growing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 h-14 text-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              asChild
            >
              <Link to="/register">Get Started for Free</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 px-8 h-14 text-lg font-medium"
              asChild
            >
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SS</span>
                </div>
                <span className="text-xl font-bold text-white">SkillSwap</span>
              </div>
              <p className="text-gray-400">Connecting learners and experts worldwide through skill exchange.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'How it Works', 'Pricing', 'Testimonials', 'Blog'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Contact', 'Press', 'Partners'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for the latest updates and news.
              </p>
              <div className="mt-4 flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 w-full rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
